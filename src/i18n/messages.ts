export type Locale = 'zh-CN' | 'en-US' | 'ja-JP';

export type MessageKey =
  | 'appTitle'
  | 'appSubtitle'
  | 'inputInfo'
  | 'nicknameRequired'
  | 'avatarUrl'
  | 'avatarUploadLocal'
  | 'avatarSelectFile'
  | 'avatarNoFile'
  | 'avatarFileSelected'
  | 'urlPlaceholder'
  | 'nicknamePlaceholder'
  | 'mbtiPlaceholder'
  | 'aboutPlaceholder'
  | 'wantsPlaceholder'
  | 'boundariesPlaceholder'
  | 'genderAttr'
  | 'region'
  | 'mbti'
  | 'aboutMe'
  | 'tagsComma'
  | 'fandomComma'
  | 'oshiComma'
  | 'hobbiesComma'
  | 'wantsToMeet'
  | 'boundaries'
  | 'contacts'
  | 'qq'
  | 'wechat'
  | 'x'
  | 'weibo'
  | 'maskContact'
  | 'styleLayout'
  | 'template'
  | 'ratio'
  | 'primaryColor'
  | 'radius'
  | 'fontScale'
  | 'backgroundUrl'
  | 'saveDraft'
  | 'resetDefaults'
  | 'preview'
  | 'exportRatio'
  | 'exportPng'
  | 'exporting'
  | 'savedDraft'
  | 'exportSuccess'
  | 'exportFail'
  | 'themeMode'
  | 'locale'
  | 'themeLight'
  | 'themeDark'
  | 'themePastel'
  | 'themeOcean'
  | 'themeMono'
  | 'themeNeon'
  | 'tagTemplate'
  | 'splitTemplate'
  | 'templateBadgeBoard'
  | 'templateMinimalBio'
  | 'templateQuickLink'
  | 'themeSunset'
  | 'longRatio'
  | 'squareRatio'
  | 'aboutSection'
  | 'tagSection'
  | 'fandomOshiSection'
  | 'fandomSection'
  | 'oshiSection'
  | 'wantsSection'
  | 'boundariesSection'
  | 'contactSection'
  | 'emptyBasicInfo'
  | 'untitled'
  | 'notFilled';

const zhCN: Record<MessageKey, string> = {
  appTitle: '二次元扩列自介条生成器',
  appSubtitle: '输入即预览 · 一键导出 PNG（适合社媒发布）',
  inputInfo: '输入信息',
  nicknameRequired: '昵称（必填）',
  avatarUrl: '头像 URL',
  avatarUploadLocal: '本地上传头像',
  avatarSelectFile: '选择图片文件',
  avatarNoFile: '未选择文件',
  avatarFileSelected: '已选择：{name}',
  urlPlaceholder: 'https://...',
  nicknamePlaceholder: '例如：小芝士',
  mbtiPlaceholder: '例如：INTP-T',
  aboutPlaceholder: '用一句话介绍你自己…',
  wantsPlaceholder: '想找什么样的同好/搭子…',
  boundariesPlaceholder: '例如：不聊现实隐私话题…',
  genderAttr: '性别/属性',
  region: '地区',
  mbti: 'MBTI',
  aboutMe: '关于我',
  tagsComma: '属性标签（逗号分隔）',
  fandomComma: '主坑作品（逗号分隔）',
  oshiComma: '推し（逗号分隔）',
  hobbiesComma: '爱好（逗号分隔）',
  wantsToMeet: '扩列诉求',
  boundaries: '雷点/边界',
  contacts: '联系方式',
  qq: 'QQ',
  wechat: '微信',
  x: 'X',
  weibo: '微博',
  maskContact: '预览时脱敏联系方式',
  styleLayout: '样式与布局',
  template: '模板',
  ratio: '比例',
  primaryColor: '主题色',
  radius: '圆角（0~32）',
  fontScale: '字体缩放（0.85~1.2）',
  backgroundUrl: '背景图 URL',
  saveDraft: '保存草稿',
  resetDefaults: '重置默认值',
  preview: '实时预览',
  exportRatio: '当前导出比例：{ratio}（PNG，2x+）',
  exportPng: '导出 PNG',
  exporting: '导出中...',
  savedDraft: '已保存草稿',
  exportSuccess: '导出成功，已开始下载。',
  exportFail: '导出失败，请检查头像/背景图链接是否可访问后重试。',
  themeMode: '主题模式',
  locale: '语言',
  themeLight: '浅色',
  themeDark: '深色',
  themePastel: '糖果',
  themeOcean: '海洋',
  themeMono: '极简',
  themeNeon: '霓虹',
  tagTemplate: '标签卡片型',
  splitTemplate: '信息分栏型',
  templateBadgeBoard: '徽章墙布局',
  templateMinimalBio: '极简自介布局',
  templateQuickLink: '速联卡片布局',
  themeSunset: '日落',
  longRatio: '长图 9:16',
  squareRatio: '方图 1:1',
  aboutSection: '关于我',
  tagSection: '标签',
  fandomOshiSection: '主坑 / 推し',
  fandomSection: '主坑',
  oshiSection: '推し',
  wantsSection: '扩列诉求',
  boundariesSection: '雷点 / 边界',
  contactSection: '联系方式',
  emptyBasicInfo: '请补充基础信息',
  untitled: '未命名',
  notFilled: '未填写',
};

const enUS: Record<MessageKey, string> = {
  appTitle: 'ACG Friend Card Generator',
  appSubtitle: 'Live preview · Export PNG with one click',
  inputInfo: 'Input',
  nicknameRequired: 'Nickname (required)',
  avatarUrl: 'Avatar URL',
  avatarUploadLocal: 'Upload Local Avatar',
  avatarSelectFile: 'Choose Image File',
  avatarNoFile: 'No file selected',
  avatarFileSelected: 'Selected: {name}',
  urlPlaceholder: 'https://...',
  nicknamePlaceholder: 'e.g. Chizuku',
  mbtiPlaceholder: 'e.g. INTP-T',
  aboutPlaceholder: 'Describe yourself in one sentence…',
  wantsPlaceholder: 'Who do you want to meet…',
  boundariesPlaceholder: 'e.g. No private life topics…',
  genderAttr: 'Gender / Attribute',
  region: 'Region',
  mbti: 'MBTI',
  aboutMe: 'About Me',
  tagsComma: 'Tags (comma separated)',
  fandomComma: 'Fandoms (comma separated)',
  oshiComma: 'Oshi (comma separated)',
  hobbiesComma: 'Hobbies (comma separated)',
  wantsToMeet: 'Looking For',
  boundaries: 'Boundaries',
  contacts: 'Contacts',
  qq: 'QQ',
  wechat: 'WeChat',
  x: 'X',
  weibo: 'Weibo',
  maskContact: 'Mask contacts in preview',
  styleLayout: 'Style & Layout',
  template: 'Template',
  ratio: 'Ratio',
  primaryColor: 'Primary Color',
  radius: 'Radius (0~32)',
  fontScale: 'Font Scale (0.85~1.2)',
  backgroundUrl: 'Background URL',
  saveDraft: 'Save Draft',
  resetDefaults: 'Reset',
  preview: 'Preview',
  exportRatio: 'Current ratio: {ratio} (PNG, 2x+)',
  exportPng: 'Export PNG',
  exporting: 'Exporting...',
  savedDraft: 'Draft saved',
  exportSuccess: 'Export successful. Download started.',
  exportFail: 'Export failed. Please check image links and try again.',
  themeMode: 'Theme Mode',
  locale: 'Language',
  themeLight: 'Light',
  themeDark: 'Dark',
  themePastel: 'Pastel',
  themeOcean: 'Ocean',
  themeMono: 'Mono',
  themeNeon: 'Neon',
  tagTemplate: 'Tag Card',
  splitTemplate: 'Split Info',
  templateBadgeBoard: 'Badge Board',
  templateMinimalBio: 'Minimal Bio',
  templateQuickLink: 'Quick Link Card',
  themeSunset: 'Sunset',
  longRatio: 'Long 9:16',
  squareRatio: 'Square 1:1',
  aboutSection: 'About',
  tagSection: 'Tags',
  fandomOshiSection: 'Fandom / Oshi',
  fandomSection: 'Fandom',
  oshiSection: 'Oshi',
  wantsSection: 'Looking For',
  boundariesSection: 'Boundaries',
  contactSection: 'Contacts',
  emptyBasicInfo: 'Please fill basic info',
  untitled: 'Untitled',
  notFilled: 'Not filled',
};

const jaJP: Record<MessageKey, string> = {
  appTitle: '拡列プロフィール生成ツール',
  appSubtitle: '入力即プレビュー・ワンクリックで PNG 出力',
  inputInfo: '入力情報',
  nicknameRequired: 'ニックネーム（必須）',
  avatarUrl: 'アイコン URL',
  avatarUploadLocal: 'ローカル画像をアップロード',
  avatarSelectFile: '画像ファイルを選択',
  avatarNoFile: 'ファイル未選択',
  avatarFileSelected: '選択済み：{name}',
  urlPlaceholder: 'https://...',
  nicknamePlaceholder: '例：チーズ',
  mbtiPlaceholder: '例：INTP-T',
  aboutPlaceholder: 'ひとことで自己紹介…',
  wantsPlaceholder: 'どんな同好を募集しているか…',
  boundariesPlaceholder: '例：個人情報の話題はNG…',
  genderAttr: '属性',
  region: '地域',
  mbti: 'MBTI',
  aboutMe: '自己紹介',
  tagsComma: 'タグ（カンマ区切り）',
  fandomComma: '主なジャンル（カンマ区切り）',
  oshiComma: '推し（カンマ区切り）',
  hobbiesComma: '趣味（カンマ区切り）',
  wantsToMeet: '募集内容',
  boundaries: '地雷・境界',
  contacts: '連絡先',
  qq: 'QQ',
  wechat: 'WeChat',
  x: 'X',
  weibo: 'Weibo',
  maskContact: 'プレビュー時に連絡先をマスク',
  styleLayout: 'スタイルとレイアウト',
  template: 'テンプレート',
  ratio: '比率',
  primaryColor: 'テーマカラー',
  radius: '角丸（0~32）',
  fontScale: '文字サイズ（0.85~1.2）',
  backgroundUrl: '背景画像 URL',
  saveDraft: '下書きを保存',
  resetDefaults: '初期化',
  preview: 'プレビュー',
  exportRatio: '現在の出力比率：{ratio}（PNG、2x+）',
  exportPng: 'PNG 出力',
  exporting: '出力中...',
  savedDraft: '下書きを保存しました',
  exportSuccess: '出力成功。ダウンロードを開始しました。',
  exportFail: '出力失敗。画像リンクを確認して再試行してください。',
  themeMode: 'テーマモード',
  locale: '言語',
  themeLight: 'ライト',
  themeDark: 'ダーク',
  themePastel: 'パステル',
  themeOcean: 'オーシャン',
  themeMono: 'モノ',
  themeNeon: 'ネオン',
  tagTemplate: 'タグカード',
  splitTemplate: '分割情報',
  templateBadgeBoard: 'バッジボード',
  templateMinimalBio: 'ミニマル自己紹介',
  templateQuickLink: 'クイックリンクカード',
  themeSunset: 'サンセット',
  longRatio: '縦長 9:16',
  squareRatio: '正方形 1:1',
  aboutSection: '自己紹介',
  tagSection: 'タグ',
  fandomOshiSection: '主ジャンル / 推し',
  fandomSection: '主ジャンル',
  oshiSection: '推し',
  wantsSection: '募集内容',
  boundariesSection: '地雷・境界',
  contactSection: '連絡先',
  emptyBasicInfo: '基本情報を入力してください',
  untitled: '未設定',
  notFilled: '未入力',
};

const catalog: Record<Locale, Record<MessageKey, string>> = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP,
};

export function t(locale: Locale, key: MessageKey, params?: Record<string, string>): string {
  const dict = catalog[locale] ?? zhCN;
  let text = dict[key] ?? zhCN[key];

  if (params) {
    for (const [name, value] of Object.entries(params)) {
      text = text.split(`{${name}}`).join(value);
    }
  }

  return text;
}
