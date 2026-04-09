import { forwardRef } from 'react';
import { useDependency } from '../../di/context';
import { DI_TOKENS } from '../../di/tokens';
import { ThemeRegistry } from '../../extensions/themeRegistry';
import { t } from '../../i18n/messages';
import type { ProfileData } from '../../types/profile';
import TemplateRenderer from '../templates/TemplateRenderer';

type Props = {
  data: ProfileData;
};

const ratioClassMap: Record<ProfileData['ratio'], string> = {
  '9:16': 'ratio-9-16',
  '1:1': 'ratio-1-1',
};

const PreviewCanvas = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const tx = (key: Parameters<typeof t>[1], params?: Record<string, string>) => t(data.locale, key, params);
  const themeRegistry = useDependency<ThemeRegistry>(DI_TOKENS.themeRegistry);

  const selectedTheme = themeRegistry.get(data.theme.mode) ?? themeRegistry.list()[0];
  const previewThemeClass = selectedTheme?.previewClassName ?? 'theme-pastel';

  const backgroundStyle = data.theme.backgroundUrl
    ? { backgroundImage: `url(${data.theme.backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined;

  return (
    <section className="panel">
      <h2>{tx('preview')}</h2>
      <p className="muted">{tx('exportRatio', { ratio: data.ratio })}</p>
      <div className={`preview-wrap ${ratioClassMap[data.ratio]}`}>
        <div
          ref={ref}
          className={`preview-canvas ${previewThemeClass}`}
          style={{
            ...backgroundStyle,
            fontSize: `${data.theme.fontScale}rem`,
            ['--primary-color' as string]: data.theme.primaryColor,
          }}
        >
          <TemplateRenderer data={data} />
        </div>
      </div>
    </section>
  );
});

PreviewCanvas.displayName = 'PreviewCanvas';

export default PreviewCanvas;
