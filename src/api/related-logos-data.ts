export type RelatedLogosMap = Record<string, string[]>;

// Relations are automatically bidirectional
// You only need to define the relation once
export const RELATED_LOGOS_DATA: RelatedLogosMap = {
  usdc: ['tether'], // USDC <-> USDT (automatic bidirectional)
};
