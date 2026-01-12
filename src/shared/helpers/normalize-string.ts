function normalizeString(value: string | number): string {
  return String(value ?? '').trim().toLowerCase();
}

export default normalizeString;