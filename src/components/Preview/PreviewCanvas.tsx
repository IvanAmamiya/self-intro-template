import { forwardRef, useEffect, useRef, useState } from 'react';
import { useDependency } from '../../di/context';
import { DI_TOKENS } from '../../di/tokens';
import { ThemeRegistry } from '../../extensions/themeRegistry';
import { t } from '../../i18n/messages';
import type { ProfileData } from '../../types/profile';
import TemplateRenderer from '../templates/TemplateRenderer';

type Props = {
  data: ProfileData;
};

const PreviewCanvas = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const tx = (key: Parameters<typeof t>[1], params?: Record<string, string>) => t(data.locale, key, params);
  const themeRegistry = useDependency<ThemeRegistry>(DI_TOKENS.themeRegistry);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [previewNode, setPreviewNode] = useState<HTMLDivElement | null>(null);
  const [wrapHeight, setWrapHeight] = useState<number>(0);

  const selectedTheme = themeRegistry.get(data.theme.mode) ?? themeRegistry.list()[0];
  const previewThemeClass = selectedTheme?.previewClassName ?? 'theme-pastel';

  const backgroundStyle = data.theme.backgroundUrl
    ? { backgroundImage: `url(${data.theme.backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined;

  useEffect(() => {
    const updateHeight = () => {
      if (!wrapRef.current || !previewNode) {
        return;
      }

      const width = wrapRef.current.clientWidth;
      const baseHeight = data.ratio === '9:16' ? width * (16 / 9) : width;
      const contentHeight = previewNode.scrollHeight;

      setWrapHeight(Math.ceil(Math.max(baseHeight, contentHeight)));
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (wrapRef.current) {
      resizeObserver.observe(wrapRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [data, previewNode]);

  const bindPreviewRef = (node: HTMLDivElement | null) => {
    setPreviewNode(node);

    if (typeof ref === 'function') {
      ref(node);
      return;
    }

    if (ref) {
      ref.current = node;
    }
  };

  return (
    <section className="panel">
      <h2>{tx('preview')}</h2>
      <p className="muted">{tx('exportRatio', { ratio: data.ratio })}</p>
      <div ref={wrapRef} className="preview-wrap" style={wrapHeight ? { height: `${wrapHeight}px` } : undefined}>
        <div
          ref={bindPreviewRef}
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
