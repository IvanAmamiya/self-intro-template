export function maskContact(value: string): string {
  if (value.length <= 4) {
    return '*'.repeat(value.length);
  }

  const keep = value.slice(-4);
  return `${'*'.repeat(Math.max(2, value.length - 4))}${keep}`;
}
