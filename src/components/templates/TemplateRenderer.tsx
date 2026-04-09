import type { ProfileData } from '../../types/profile';
import { useDependency } from '../../di/context';
import { DI_TOKENS } from '../../di/tokens';
import { TemplateRegistry } from '../../extensions/templateRegistry';

type Props = {
  data: ProfileData;
};

export default function TemplateRenderer({ data }: Props) {
  const templateRegistry = useDependency<TemplateRegistry>(DI_TOKENS.templateRegistry);
  const selected = templateRegistry.get(data.template) ?? templateRegistry.list()[0];

  if (!selected) {
    return null;
  }

  const Component = selected.component;
  return <Component data={data} />;
}
