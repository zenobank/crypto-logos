import seedrandom from 'seedrandom';

// Deterministic shuffle using Fisher-Yates with seeded random
export function shuffleWithSeed<T>(array: T[], seed: string): T[] {
  const result = [...array];
  const rng = seedrandom(seed);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
