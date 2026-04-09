export function toSafeFileName(name: string): string {
  const trimmed = name.trim() || '自介';
  // Windows 不允许的字符：\\ / : * ? " < > |
  return trimmed.replace(/[\\/:*?"<>|]/g, '_').slice(0, 40);
}
