// Each array represents a group of related logos (bidirectional)
// Example: ['usdc', 'tether'] means USDC and USDT are related to each other
export type RelatedLogosGroup = string[];

export const RELATED_LOGOS_DATA: RelatedLogosGroup[] = [
  ['usdc', 'tether'], // USDC <-> USDT
];
