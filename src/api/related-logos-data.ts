export type RelatedLogosMap = Record<string, string[]>;

export const RELATED_LOGOS_DATA: RelatedLogosMap = {
  usdc: ['tether'], // USDC -> USDT example
  tether: ['usdc'], // Bidirectional for USDT -> USDC
};
