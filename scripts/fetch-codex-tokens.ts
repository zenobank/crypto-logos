import * as fs from 'fs';
import * as path from 'path';

/**
 * Fetches the top 10,000 tokens from the Codex GraphQL API (by market cap)
 * and writes them to scripts/internal/codex-tokens.json
 *
 * Usage: CODEX_API_KEY=your_key tsx scripts/fetch-codex-tokens.ts
 */

const CODEX_API_URL = 'https://graph.codex.io/graphql';
const API_KEY = process.env.CODEX_API_KEY;

if (!API_KEY) {
  console.error('Error: CODEX_API_KEY environment variable is required.');
  console.error('Usage: CODEX_API_KEY=your_key tsx scripts/fetch-codex-tokens.ts');
  process.exit(1);
}

const BATCH_SIZE = 200;
const TOTAL_TOKENS = 10_000;

const FILTER_TOKENS_QUERY = `
  query FilterTokens($limit: Int, $offset: Int, $rankings: [TokenRanking]) {
    filterTokens(limit: $limit, offset: $offset, rankings: $rankings) {
      results {
        buyVolume24
        sellVolume24
        txnCount24
        liquidity
        marketCap
        priceUSD
        change24
        token {
          info {
            address
            name
            symbol
            networkId
            imageThumbUrl
            imageLargeUrl
          }
        }
      }
      count
    }
  }
`;

interface CodexToken {
  address: string;
  name: string;
  symbol: string;
  networkId: number;
  imageThumbUrl: string | null;
  imageLargeUrl: string | null;
  marketCap: number | null;
  priceUSD: string | null;
  liquidity: string | null;
  volume24: number | null;
  txnCount24: number | null;
  change24: string | null;
}

interface FilterTokenResult {
  buyVolume24: string | null;
  sellVolume24: string | null;
  txnCount24: number | null;
  liquidity: string | null;
  marketCap: string | null;
  priceUSD: string | null;
  change24: string | null;
  token: {
    info: {
      address: string;
      name: string;
      symbol: string;
      networkId: number;
      imageThumbUrl: string | null;
      imageLargeUrl: string | null;
    };
  };
}

async function fetchBatch(offset: number): Promise<{ results: FilterTokenResult[]; count: number }> {
  const response = await fetch(CODEX_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: API_KEY!,
    },
    body: JSON.stringify({
      query: FILTER_TOKENS_QUERY,
      variables: {
        limit: BATCH_SIZE,
        offset,
        rankings: [{ attribute: 'marketCap', direction: 'DESC' }],
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors, null, 2)}`);
  }

  return json.data.filterTokens;
}

function mapResult(result: FilterTokenResult): CodexToken {
  const { info } = result.token;
  const buy = parseFloat(result.buyVolume24 ?? '0');
  const sell = parseFloat(result.sellVolume24 ?? '0');

  return {
    address: info.address,
    name: info.name,
    symbol: info.symbol,
    networkId: info.networkId,
    imageThumbUrl: info.imageThumbUrl,
    imageLargeUrl: info.imageLargeUrl,
    marketCap: result.marketCap ? parseFloat(result.marketCap) : null,
    priceUSD: result.priceUSD,
    liquidity: result.liquidity,
    volume24: buy + sell || null,
    txnCount24: result.txnCount24,
    change24: result.change24,
  };
}

async function main() {
  const allTokens: CodexToken[] = [];
  let offset = 0;
  let totalAvailable = Infinity;

  console.log(`Fetching top ${TOTAL_TOKENS.toLocaleString()} tokens from Codex...\n`);

  while (offset < TOTAL_TOKENS && offset < totalAvailable) {
    const { results, count } = await fetchBatch(offset);
    totalAvailable = count;

    if (results.length === 0) break;

    const mapped = results.map(mapResult);
    allTokens.push(...mapped);
    offset += results.length;

    const progress = Math.min(offset, TOTAL_TOKENS, totalAvailable);
    const target = Math.min(TOTAL_TOKENS, totalAvailable);
    console.log(`  Fetched ${progress.toLocaleString()} / ${target.toLocaleString()} tokens`);
  }

  const outputDir = path.join(__dirname, 'internal');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'codex-tokens.json');
  fs.writeFileSync(outputPath, JSON.stringify(allTokens, null, 2));

  console.log(`\nDone! Saved ${allTokens.length.toLocaleString()} tokens to ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
