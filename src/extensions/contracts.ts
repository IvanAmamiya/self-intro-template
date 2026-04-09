import type { ComponentType } from 'react';
import type { MessageKey } from '../i18n/messages';
import type { ProfileData } from '../types/profile';

export type TemplateDefinition = {
  id: string;
  labelKey: MessageKey;
  component: ComponentType<{ data: ProfileData }>;
};

export type ThemeDefinition = {
  id: string;
  labelKey: MessageKey;
  previewClassName: string;
};
