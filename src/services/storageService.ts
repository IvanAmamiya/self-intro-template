import type { ProfileData } from '../types/profile';

const STORAGE_KEY = 'self-intro-template:draft';

export function saveDraft(data: ProfileData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadDraft(): ProfileData | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as ProfileData;
  } catch {
    return null;
  }
}

export function clearDraft(): void {
  localStorage.removeItem(STORAGE_KEY);
}
