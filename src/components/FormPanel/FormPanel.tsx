import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useDependency } from '../../di/context';
import { DI_TOKENS } from '../../di/tokens';
import { TemplateRegistry } from '../../extensions/templateRegistry';
import { ThemeRegistry } from '../../extensions/themeRegistry';
import type { ProfileData } from '../../types/profile';
import { t } from '../../i18n/messages';

type FormPanelProps = {
  data: ProfileData;
  onChange: (payload: Partial<ProfileData>) => void;
  onContactChange: (payload: Partial<ProfileData['contact']>) => void;
  onThemeChange: (payload: Partial<ProfileData['theme']>) => void;
  onReset: () => void;
  onSaveDraft: () => void;
};

function parseList(value: string): string[] {
  return value
    .split(/[，,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function toListText(list: string[]): string {
  return list.join('，');
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ''));
    reader.onerror = () => reject(new Error('failed to read file'));
    reader.readAsDataURL(file);
  });
}

export default function FormPanel({
  data,
  onChange,
  onContactChange,
  onThemeChange,
  onReset,
  onSaveDraft,
}: FormPanelProps) {
  const templateRegistry = useDependency<TemplateRegistry>(DI_TOKENS.templateRegistry);
  const themeRegistry = useDependency<ThemeRegistry>(DI_TOKENS.themeRegistry);

  const templates = templateRegistry.list();
  const themes = themeRegistry.list();

  const tx = (key: Parameters<typeof t>[1], params?: Record<string, string>) => t(data.locale, key, params);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [avatarFileName, setAvatarFileName] = useState('');

  const handleAvatarUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setAvatarFileName(file.name);

    const dataUrl = await readFileAsDataUrl(file);
    if (dataUrl) {
      onChange({ avatarUrl: dataUrl });
    }
  };

  return (
    <section className="panel">
      <h2>{tx('inputInfo')}</h2>

      <div className="grid-2">
        <label>
          {tx('locale')}
          <select value={data.locale} onChange={(e) => onChange({ locale: e.target.value as ProfileData['locale'] })}>
            <option value="zh-CN">简体中文</option>
            <option value="en-US">English</option>
            <option value="ja-JP">日本語</option>
          </select>
        </label>
      </div>

      <label>
        {tx('nicknameRequired')}
        <input
          value={data.nickname}
          maxLength={20}
          placeholder={tx('nicknamePlaceholder')}
          onChange={(e) => onChange({ nickname: e.target.value })}
        />
      </label>

      <label>
        {tx('avatarUrl')}
        <input
          value={data.avatarUrl}
          onChange={(e) => onChange({ avatarUrl: e.target.value })}
          placeholder={tx('urlPlaceholder')}
        />
      </label>

      <label>
        {tx('avatarUploadLocal')}
        <div className="upload-inline">
          <button type="button" className="ghost" onClick={() => avatarInputRef.current?.click()}>
            {tx('avatarSelectFile')}
          </button>
          <span className="upload-text">
            {avatarFileName ? tx('avatarFileSelected', { name: avatarFileName }) : tx('avatarNoFile')}
          </span>
        </div>
        <input
          ref={avatarInputRef}
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          style={{ display: 'none' }}
        />
      </label>

      <div className="grid-2">
        <label>
          {tx('genderAttr')}
          <input value={data.gender ?? ''} onChange={(e) => onChange({ gender: e.target.value })} />
        </label>
        <label>
          {tx('region')}
          <input value={data.region ?? ''} onChange={(e) => onChange({ region: e.target.value })} />
        </label>
      </div>

      <label>
        {tx('mbti')}
        <input
          value={data.mbti ?? ''}
          placeholder={tx('mbtiPlaceholder')}
          onChange={(e) => onChange({ mbti: e.target.value })}
        />
      </label>

      <label>
        {tx('aboutMe')}
        <textarea
          value={data.about}
          maxLength={120}
          placeholder={tx('aboutPlaceholder')}
          onChange={(e) => onChange({ about: e.target.value })}
        />
      </label>

      <label>
        {tx('tagsComma')}
        <input value={toListText(data.tags)} onChange={(e) => onChange({ tags: parseList(e.target.value) })} />
      </label>

      <label>
        {tx('fandomComma')}
        <input value={toListText(data.fandoms)} onChange={(e) => onChange({ fandoms: parseList(e.target.value) })} />
      </label>

      <label>
        {tx('oshiComma')}
        <input value={toListText(data.oshi)} onChange={(e) => onChange({ oshi: parseList(e.target.value) })} />
      </label>

      <label>
        {tx('hobbiesComma')}
        <input value={toListText(data.hobbies)} onChange={(e) => onChange({ hobbies: parseList(e.target.value) })} />
      </label>

      <label>
        {tx('wantsToMeet')}
        <textarea
          value={data.wantsToMeet}
          maxLength={120}
          placeholder={tx('wantsPlaceholder')}
          onChange={(e) => onChange({ wantsToMeet: e.target.value })}
        />
      </label>

      <label>
        {tx('boundaries')}
        <textarea
          value={data.boundaries}
          maxLength={120}
          placeholder={tx('boundariesPlaceholder')}
          onChange={(e) => onChange({ boundaries: e.target.value })}
        />
      </label>

      <h3>{tx('contacts')}</h3>
      <div className="grid-2">
        <label>
          {tx('qq')}
          <input value={data.contact.qq ?? ''} onChange={(e) => onContactChange({ qq: e.target.value })} />
        </label>
        <label>
          {tx('wechat')}
          <input value={data.contact.wechat ?? ''} onChange={(e) => onContactChange({ wechat: e.target.value })} />
        </label>
        <label>
          {tx('x')}
          <input value={data.contact.x ?? ''} onChange={(e) => onContactChange({ x: e.target.value })} />
        </label>
        <label>
          {tx('weibo')}
          <input value={data.contact.weibo ?? ''} onChange={(e) => onContactChange({ weibo: e.target.value })} />
        </label>
      </div>

      <label className="check-line">
        <input
          type="checkbox"
          checked={data.privacy.maskContact}
          onChange={(e) => onChange({ privacy: { maskContact: e.target.checked } })}
        />
        {tx('maskContact')}
      </label>

      <h3>{tx('styleLayout')}</h3>
      <div className="grid-2">
        <label>
          {tx('template')}
          <select value={data.template} onChange={(e) => onChange({ template: e.target.value as ProfileData['template'] })}>
            {templates.map((item) => (
              <option key={item.id} value={item.id}>
                {tx(item.labelKey)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {tx('ratio')}
          <select value={data.ratio} onChange={(e) => onChange({ ratio: e.target.value as ProfileData['ratio'] })}>
            <option value="9:16">{tx('longRatio')}</option>
            <option value="1:1">{tx('squareRatio')}</option>
          </select>
        </label>
        <label>
          {tx('primaryColor')}
          <input
            type="color"
            value={data.theme.primaryColor}
            onChange={(e) => onThemeChange({ primaryColor: e.target.value })}
          />
        </label>
        <label>
          {tx('radius')}
          <input
            type="range"
            min={0}
            max={32}
            value={data.theme.borderRadius}
            onChange={(e) => onThemeChange({ borderRadius: Number(e.target.value) })}
          />
        </label>
        <label>
          {tx('fontScale')}
          <input
            type="range"
            min={0.85}
            max={1.2}
            step={0.01}
            value={data.theme.fontScale}
            onChange={(e) => onThemeChange({ fontScale: Number(e.target.value) })}
          />
        </label>
        <label>
          {tx('themeMode')}
          <select value={data.theme.mode} onChange={(e) => onThemeChange({ mode: e.target.value as ProfileData['theme']['mode'] })}>
            {themes.map((item) => (
              <option key={item.id} value={item.id}>
                {tx(item.labelKey)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        {tx('backgroundUrl')}
        <input
          value={data.theme.backgroundUrl ?? ''}
          onChange={(e) => onThemeChange({ backgroundUrl: e.target.value })}
          placeholder={tx('urlPlaceholder')}
        />
      </label>

      <div className="btn-row">
        <button type="button" onClick={onSaveDraft}>
          {tx('saveDraft')}
        </button>
        <button type="button" className="ghost" onClick={onReset}>
          {tx('resetDefaults')}
        </button>
      </div>
    </section>
  );
}
