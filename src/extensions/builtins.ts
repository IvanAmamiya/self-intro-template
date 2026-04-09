import type { ThemeDefinition, TemplateDefinition } from './contracts';
import BadgeBoardTemplate from '../components/templates/BadgeBoardTemplate';
import MinimalBioTemplate from '../components/templates/MinimalBioTemplate';
import SplitInfoTemplate from '../components/templates/SplitInfoTemplate';
import TagCardTemplate from '../components/templates/TagCardTemplate';

export const builtInTemplates: TemplateDefinition[] = [
  { id: 'tag-card', labelKey: 'tagTemplate', component: TagCardTemplate },
  { id: 'split-info', labelKey: 'splitTemplate', component: SplitInfoTemplate },
  { id: 'badge-board', labelKey: 'templateBadgeBoard', component: BadgeBoardTemplate },
  { id: 'minimal-bio', labelKey: 'templateMinimalBio', component: MinimalBioTemplate },
];

export const builtInThemes: ThemeDefinition[] = [
  { id: 'pastel', labelKey: 'themePastel', previewClassName: 'theme-pastel' },
  { id: 'light', labelKey: 'themeLight', previewClassName: 'theme-light' },
  { id: 'dark', labelKey: 'themeDark', previewClassName: 'theme-dark' },
  { id: 'ocean', labelKey: 'themeOcean', previewClassName: 'theme-ocean' },
  { id: 'mono', labelKey: 'themeMono', previewClassName: 'theme-mono' },
  { id: 'neon', labelKey: 'themeNeon', previewClassName: 'theme-neon' },
];
