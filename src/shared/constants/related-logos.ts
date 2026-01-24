import seedrandom from 'seedrandom';
import { RELATED_LOGOS_DATA } from '@/api/related-logos-data';
import { LOGOS_BY_ID, LOGOS_BY_CATEGORY } from '@/shared/constants/logos-data';
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// Deterministic shuffle using Fisher-Yates with seeded random
function shuffleWithSeed<T>(array: T[], seed: string): T[] {
  const result = [...array];
  const rng = seedrandom(seed);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Find inverse relations: logos that have logoId in their list
function getInverseRelated(logoId: string): string[] {
  const inverseRelated: string[] = [];
  for (const [key, relatedIds] of Object.entries(RELATED_LOGOS_DATA)) {
    if (relatedIds.includes(logoId)) {
      inverseRelated.push(key);
    }
  }
  return inverseRelated;
}

export function getRelatedLogos(logoId: string): LogoItemsResponse[] {
  const currentLogo = LOGOS_BY_ID[logoId];
  if (!currentLogo) return [];

  const seen = new Set<string>([logoId]);
  const result: LogoItemsResponse[] = [];

  // 1. Manual mappings (direct + inverse for automatic bidirectionality)
  const directRelated = shuffleWithSeed(
    RELATED_LOGOS_DATA[logoId] || [],
    logoId,
  );
  const inverseRelated = shuffleWithSeed(getInverseRelated(logoId), logoId);
  const related = [...directRelated, ...inverseRelated];

  for (const relatedId of related) {
    if (!seen.has(relatedId) && LOGOS_BY_ID[relatedId]) {
      seen.add(relatedId);
      result.push(LOGOS_BY_ID[relatedId]);
    }
  }

  // 2. Same main category
  const categoryLogos = LOGOS_BY_CATEGORY[currentLogo.mainCategory.id] || [];
  for (const logo of categoryLogos) {
    if (!seen.has(logo.id)) {
      seen.add(logo.id);
      result.push(logo);
    }
  }

  // Shuffle deterministically based on logoId so each logo shows different related logos
  return result;
}
