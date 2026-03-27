// Each array represents a group of related logos (bidirectional)
// Example: ['usdc', 'tether'] means USDC and USDT are related to each other
export type RelatedLogosGroup = string[];

export const RELATED_LOGOS_DATA: RelatedLogosGroup[] = [
  ['usdt', 'usdt0'], // USDT <-> USDT0
  ['usdt', 'usdt0', 'tether-gold'], // Tether family
  ['pathusd', 'stripe', 'tempo'], // pathUSD <-> Stripe <-> Tempo
  ['solana', 'solana-foundation'], // Solana <-> Solana Foundation
  ['trezor', 'trezor-suite'], // Trezor <-> Trezor Suite
  ['paypal', 'paypal-usd'], // PayPal <-> PayPal USD (PYUSD)
];
