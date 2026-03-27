import * as fs from 'fs';
import * as path from 'path';

/**
 * Fetches token logos + banners from Codex GraphQL API for a curated list of tokens.
 *
 * Strategy:
 *   1. filterTokens → collect ALL matching address+networkId pairs per symbol
 *   2. tokens (batch) → fetch images for all candidates
 *   3. Pick the candidate that has images (prefer the one with highest market cap)
 *
 * Usage: tsx scripts/fetch-token-logos.ts
 */

const CODEX_API_URL = 'https://graph.codex.io/graphql';
const API_KEY = process.env.CODEX_API_KEY ?? 'bc7fde742ee3a856a0ed8e128477efde3605c5b4';

const TOKENS: [string, string][] = [
  ['0G', '0G'],
  ['2Z', 'DoubleZero'],
  ['A', 'Vaulta'],
  ['AB', 'AB'],
  ['AERO', 'Aerodrome Finance'],
  ['AWE', 'AWE'],
  ['B', 'BUILDon'],
  ['BONK', 'Bonk'],
  ['CC', 'Canton'],
  ['CHEEMS', 'Cheems'],
  ['DEEP', 'DeepBook Protocol'],
  ['DOG', 'Dog'],
  ['EURC', 'EURC'],
  ['FARTCOIN', 'Fartcoin'],
  ['FF', 'Falcon Finance'],
  ['H', 'Humanity Protocol'],
  ['HOME', 'Defi App'],
  ['IRYS', 'Irys'],
  ['KMNO', 'Kamino'],
  ['LIT', 'Lighter'],
  ['M', 'MemeCore'],
  ['MELANIA', 'Official Melania Meme'],
  ['MET', 'Meteora'],
  ['MYX', 'MYX Finance'],
  ['NIGHT', 'Midnight'],
  ['PI', 'Pi'],
  ['PIPPIN', 'Pippin'],
  ['PUMP', 'Pump.fun'],
  ['RIVER', 'River'],
  ['S', 'Sonic'],
  ['SAFE', 'Safe'],
  ['SKR', 'Seeker'],
  ['SPX', 'SPX6900'],
  ['STABLE', 'Stable'],
  ['SUN', 'Sun'],
  ['SYRUP', 'Maple Finance'],
  ['TOSHI', 'Toshi'],
  ['TRUMP', 'OFFICIAL TRUMP'],
  ['U', 'United Stables'],
  ['VIRTUAL', 'Virtuals Protocol'],
  ['VSN', 'Vision'],
  ['WAL', 'Walrus'],
  ['WLFI', 'World Liberty Financial'],
  ['XCN', 'Onyxcoin'],
  ['XPL', 'Plasma'],
  ['YZY', 'YZY MONEY'],
  ['ZBCN', 'Zebec Network'],
  ['ZORA', 'ZORA'],
];

const FILTER_TOKENS_QUERY = `
  query FilterTokens($phrase: String, $limit: Int, $rankings: [TokenRanking]) {
    filterTokens(phrase: $phrase, limit: $limit, rankings: $rankings) {
      results {
        marketCap
        token {
          address
          networkId
          name
          symbol
        }
      }
    }
  }
`;

const TOKENS_QUERY = `
  query Tokens($ids: [TokenInput!]!) {
    tokens(ids: $ids) {
      address
      networkId
      name
      symbol
      info {
        imageThumbUrl
        imageSmallUrl
        imageLargeUrl
        imageBannerUrl
      }
    }
  }
`;

interface FilterResult {
  marketCap: string | null;
  token: { address: string; networkId: number; name: string; symbol: string };
}

interface TokenImages {
  address: string;
  networkId: number;
  name: string;
  symbol: string;
  info: {
    imageThumbUrl: string | null;
    imageSmallUrl: string | null;
    imageLargeUrl: string | null;
    imageBannerUrl: string | null;
  } | null;
}

async function gql<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const response = await fetch(CODEX_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: API_KEY },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  const json = await response.json();
  if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

async function findCandidates(symbol: string, name: string): Promise<{ address: string; networkId: number }[]> {
  const candidates: { address: string; networkId: number }[] = [];
  const seen = new Set<string>();

  for (const phrase of [symbol, name]) {
    const data = await gql<{ filterTokens: { results: FilterResult[] } }>(FILTER_TOKENS_QUERY, {
      phrase,
      limit: 50,
      rankings: [{ attribute: 'marketCap', direction: 'DESC' }],
    });

    for (const r of data.filterTokens.results) {
      if (r.token.symbol.toUpperCase() !== symbol.toUpperCase()) continue;
      const key = `${r.token.address}:${r.token.networkId}`;
      if (seen.has(key)) continue;
      seen.add(key);
      candidates.push({ address: r.token.address, networkId: r.token.networkId });
    }
  }

  return candidates;
}

function getLogoUrl(info: TokenImages['info']): string | null {
  if (!info) return null;
  return info.imageLargeUrl ?? info.imageSmallUrl ?? info.imageThumbUrl ?? null;
}

function getExtension(url: string): string {
  try {
    const ext = path.extname(new URL(url).pathname).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(ext)) return ext;
  } catch {}
  return '.png';
}

async function downloadImage(url: string, outputPath: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: HTTP ${response.status}`);
  fs.writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()));
}

async function main() {
  const outputDir = path.join(__dirname, 'output', 'token-logos');
  const bannersDir = path.join(outputDir, 'banners');
  fs.mkdirSync(bannersDir, { recursive: true });

  type Result = { symbol: string; name: string; status: string; logoFile?: string; bannerFile?: string; logoUrl?: string; bannerUrl?: string };
  const results: Result[] = [];

  console.log(`Fetching logos + banners for ${TOKENS.length} tokens from Codex...\n`);

  for (const [symbol, name] of TOKENS) {
    try {
      // Step 1: find all candidate addresses
      const candidates = await findCandidates(symbol, name);

      if (candidates.length === 0) {
        console.log(`  [MISS] ${symbol} (${name}) — not found on Codex`);
        results.push({ symbol, name, status: 'not_found' });
        await new Promise((r) => setTimeout(r, 150));
        continue;
      }

      console.log(`  [SRCH] ${symbol} — ${candidates.length} candidate(s), fetching images...`);

      // Step 2: batch-fetch images for all candidates
      const tokenImages = await gql<{ tokens: TokenImages[] }>(TOKENS_QUERY, { ids: candidates });

      // Step 3: pick the first candidate with images
      let best: TokenImages | null = null;
      for (const img of tokenImages.tokens) {
        const logoUrl = getLogoUrl(img.info);
        if (logoUrl) {
          best = img;
          break;
        }
      }

      if (!best) {
        // Check if any has a banner even without logo
        for (const img of tokenImages.tokens) {
          if (img.info?.imageBannerUrl) {
            best = img;
            break;
          }
        }
      }

      if (!best || (!getLogoUrl(best.info) && !best.info?.imageBannerUrl)) {
        console.log(`  [MISS] ${symbol} (${name}) — ${candidates.length} candidates, none have images`);
        results.push({ symbol, name, status: 'no_image' });
        await new Promise((r) => setTimeout(r, 150));
        continue;
      }

      // Step 4: download
      const logoUrl = getLogoUrl(best.info);
      const bannerUrl = best.info?.imageBannerUrl ?? null;
      let logoFile: string | undefined;
      let bannerFile: string | undefined;

      if (logoUrl) {
        logoFile = `${symbol.toLowerCase()}${getExtension(logoUrl)}`;
        await downloadImage(logoUrl, path.join(outputDir, logoFile));
      }

      if (bannerUrl) {
        bannerFile = `${symbol.toLowerCase()}${getExtension(bannerUrl)}`;
        await downloadImage(bannerUrl, path.join(bannersDir, bannerFile));
      }

      const parts = [logoFile ? 'logo' : null, bannerFile ? 'banner' : null].filter(Boolean).join(' + ');
      console.log(`  [OK]   ${symbol} (${name}) → ${parts}  [${best.address.slice(0, 10)}... network:${best.networkId}]`);
      results.push({
        symbol, name, status: 'ok',
        logoFile, bannerFile,
        logoUrl: logoUrl ?? undefined,
        bannerUrl: bannerUrl ?? undefined,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(`  [ERR]  ${symbol} (${name}) — ${message}`);
      results.push({ symbol, name, status: 'error' });
    }

    await new Promise((r) => setTimeout(r, 200));
  }

  // Write summary
  fs.writeFileSync(path.join(outputDir, '_summary.json'), JSON.stringify(results, null, 2));

  const ok = results.filter((r) => r.status === 'ok').length;
  const missed = results.filter((r) => r.status !== 'ok').length;

  console.log(`\n${'='.repeat(50)}`);
  console.log(`Done! ${ok} tokens with images, ${missed} missed.`);
  console.log(`Logos:   ${path.relative(process.cwd(), outputDir)}/`);
  console.log(`Banners: ${path.relative(process.cwd(), bannersDir)}/`);

  if (missed > 0) {
    console.log(`\nMissing tokens:`);
    results
      .filter((r) => r.status !== 'ok')
      .forEach((r) => console.log(`  - ${r.symbol} (${r.name}): ${r.status}`));
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
