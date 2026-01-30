import { RELATED_LOGOS_DATA } from '@/api/related-logos-data';
import { LOGOS_BY_ID, LOGOS_BY_CATEGORY } from '@/shared/constants/logos-data';
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import { shuffleWithSeed } from '../helpers/suffle-with-seed';

// Pre-computed lookup map: logoId -> related logoIds (O(1) lookup)
const RELATED_LOGOS_MAP: Record<string, string[]> = {};

for (const group of RELATED_LOGOS_DATA) {
  for (const logoId of group) {
    if (!RELATED_LOGOS_MAP[logoId]) {
      RELATED_LOGOS_MAP[logoId] = [];
    }
    for (const relatedId of group) {
      if (relatedId !== logoId && !RELATED_LOGOS_MAP[logoId].includes(relatedId)) {
        RELATED_LOGOS_MAP[logoId].push(relatedId);
      }
    }
  }
}

export function getRelatedLogos(logoId: string): LogoItemsResponse[] {
  const currentLogo = LOGOS_BY_ID[logoId];
  if (!currentLogo) return [];

  const seen = new Set<string>([logoId]);
  const result: LogoItemsResponse[] = [];

  // 1. Manual mappings from groups (automatically bidirectional)
  const related = shuffleWithSeed(RELATED_LOGOS_MAP[logoId] || [], logoId);

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

  return result;
}
