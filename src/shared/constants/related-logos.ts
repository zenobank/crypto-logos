import { RELATED_LOGOS_DATA } from '@/api/related-logos-data';
import { LOGOS_BY_ID, LOGOS_BY_CATEGORY } from '@/shared/constants/logos-data';
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

export function getRelatedLogos(logoId: string): LogoItemsResponse[] {
  const currentLogo = LOGOS_BY_ID[logoId];
  if (!currentLogo) return [];

  const seen = new Set<string>([logoId]);
  const result: LogoItemsResponse[] = [];

  // 1. Manual mappings first
  const manualRelated = RELATED_LOGOS_DATA[logoId] || [];
  for (const relatedId of manualRelated) {
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
