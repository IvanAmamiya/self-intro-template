import type { ProfileData } from '../types/profile';
import type { Locale } from '../i18n/messages';

export type ValidationResult = {
  valid: boolean;
  messages: string[];
};

function hasInvalidListItem(list: string[]): boolean {
  return list.some((item) => item.length > 20);
}

function msg(locale: Locale, key: string): string {
  const catalog: Record<Locale, Record<string, string>> = {
    'zh-CN': {
      nicknameRequired: '昵称不能为空。',
      nicknameLength: '昵称不能超过 20 个字符。',
      aboutLength: '“关于我”不能超过 120 个字符。',
      wantsLength: '“扩列诉求”不能超过 120 个字符。',
      boundariesLength: '“雷点/边界”不能超过 120 个字符。',
      listLength: '标签、主坑、推し中的单项建议不超过 20 个字符。',
      radiusRange: '卡片圆角必须在 0 到 32 之间。',
      fontRange: '字体缩放必须在 0.85 到 1.2 之间。',
      qqRule: 'QQ 需为 5 到 12 位数字。',
    },
    'en-US': {
      nicknameRequired: 'Nickname is required.',
      nicknameLength: 'Nickname must be 20 characters or less.',
      aboutLength: 'About section must be 120 characters or less.',
      wantsLength: 'Looking-for section must be 120 characters or less.',
      boundariesLength: 'Boundaries section must be 120 characters or less.',
      listLength: 'Each tag/fandom/oshi item should be within 20 characters.',
      radiusRange: 'Card radius must be between 0 and 32.',
      fontRange: 'Font scale must be between 0.85 and 1.2.',
      qqRule: 'QQ must be 5 to 12 digits.',
    },
    'ja-JP': {
      nicknameRequired: 'ニックネームは必須です。',
      nicknameLength: 'ニックネームは20文字以内にしてください。',
      aboutLength: '自己紹介は120文字以内にしてください。',
      wantsLength: '募集内容は120文字以内にしてください。',
      boundariesLength: '地雷・境界は120文字以内にしてください。',
      listLength: 'タグ・主ジャンル・推しの各項目は20文字以内を推奨します。',
      radiusRange: '角丸は0〜32の範囲で設定してください。',
      fontRange: '文字サイズは0.85〜1.2の範囲で設定してください。',
      qqRule: 'QQは5〜12桁の数字で入力してください。',
    },
  };

  return catalog[locale][key] ?? catalog['zh-CN'][key];
}

export function validateProfile(data: ProfileData): ValidationResult {
  const messages: string[] = [];
  const locale = data.locale;

  if (!data.nickname.trim()) {
    messages.push(msg(locale, 'nicknameRequired'));
  }

  if (data.nickname.length > 20) {
    messages.push(msg(locale, 'nicknameLength'));
  }

  if (data.about.length > 120) {
    messages.push(msg(locale, 'aboutLength'));
  }

  if (data.wantsToMeet.length > 120) {
    messages.push(msg(locale, 'wantsLength'));
  }

  if (data.boundaries.length > 120) {
    messages.push(msg(locale, 'boundariesLength'));
  }

  if (hasInvalidListItem(data.tags) || hasInvalidListItem(data.fandoms) || hasInvalidListItem(data.oshi)) {
    messages.push(msg(locale, 'listLength'));
  }

  if (data.theme.borderRadius < 0 || data.theme.borderRadius > 32) {
    messages.push(msg(locale, 'radiusRange'));
  }

  if (data.theme.fontScale < 0.85 || data.theme.fontScale > 1.2) {
    messages.push(msg(locale, 'fontRange'));
  }

  if (data.contact.qq && !/^\d{5,12}$/.test(data.contact.qq)) {
    messages.push(msg(locale, 'qqRule'));
  }

  return {
    valid: messages.length === 0,
    messages,
  };
}
