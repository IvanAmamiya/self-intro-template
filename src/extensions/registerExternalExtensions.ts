import { DependencyContainer } from '../di/container';
import { DI_TOKENS } from '../di/tokens';
import QuickLinkTemplate from '../components/templates/QuickLinkTemplate';
import { TemplateRegistry } from './templateRegistry';
import { ThemeRegistry } from './themeRegistry';

/**
 * 在此函数中注册外部扩展（供后续 PR 使用）。
 *
 * 示例：
 * const templateRegistry = container.resolve<TemplateRegistry>(DI_TOKENS.templateRegistry);
 * templateRegistry.register({ id: 'my-template', labelKey: 'templateCustomX', component: MyTemplate });
 */
export function registerExternalExtensions(container: DependencyContainer): void {
  const templateRegistry = container.resolve<TemplateRegistry>(DI_TOKENS.templateRegistry);
  const themeRegistry = container.resolve<ThemeRegistry>(DI_TOKENS.themeRegistry);

  // 示例扩展：后续 PR 可直接按此模式新增。
  templateRegistry.register({
    id: 'quick-link',
    labelKey: 'templateQuickLink',
    component: QuickLinkTemplate,
  });

  themeRegistry.register({
    id: 'sunset',
    labelKey: 'themeSunset',
    previewClassName: 'theme-sunset',
  });
}
