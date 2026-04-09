export type TemplateId = string;
export type CanvasRatio = '9:16' | '1:1';
export type ThemeMode = string;

export type ContactInfo = {
  qq?: string;
  wechat?: string;
  x?: string;
  weibo?: string;
  bilibiliUid?: string;
};

export type ThemeConfig = {
  primaryColor: string;
  backgroundUrl?: string;
  fontScale: number;
  borderRadius: number;
  mode: ThemeMode;
};

export type PrivacyConfig = {
  maskContact: boolean;
};

export type ProfileData = {
  locale: 'zh-CN' | 'en-US' | 'ja-JP';
  nickname: string;
  avatarUrl: string;
  gender?: string;
  region?: string;
  mbti?: string;
  about: string;
  tags: string[];
  fandoms: string[];
  oshi: string[];
  hobbies: string[];
  wantsToMeet: string;
  boundaries: string;
  contact: ContactInfo;
  theme: ThemeConfig;
  privacy: PrivacyConfig;
  template: TemplateId;
  ratio: CanvasRatio;
};
