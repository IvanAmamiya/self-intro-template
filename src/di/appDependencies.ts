import { builtInTemplates, builtInThemes } from '../extensions/builtins';
import { registerExternalExtensions } from '../extensions/registerExternalExtensions';
import { TemplateRegistry } from '../extensions/templateRegistry';
import { ThemeRegistry } from '../extensions/themeRegistry';
import { DependencyContainer } from './container';
import { DI_TOKENS } from './tokens';

export type ContainerExtension = (container: DependencyContainer) => void;

export function createAppContainer(extensions: ContainerExtension[] = []): DependencyContainer {
  const container = new DependencyContainer();

  const templateRegistry = new TemplateRegistry();
  builtInTemplates.forEach((item) => templateRegistry.register(item));

  const themeRegistry = new ThemeRegistry();
  builtInThemes.forEach((item) => themeRegistry.register(item));

  container.register(DI_TOKENS.templateRegistry, templateRegistry);
  container.register(DI_TOKENS.themeRegistry, themeRegistry);

  registerExternalExtensions(container);
  extensions.forEach((extension) => extension(container));

  return container;
}
