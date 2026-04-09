import type { TemplateDefinition } from './contracts';

export class TemplateRegistry {
  private readonly map = new Map<string, TemplateDefinition>();

  register(definition: TemplateDefinition): void {
    this.map.set(definition.id, definition);
  }

  get(id: string): TemplateDefinition | undefined {
    return this.map.get(id);
  }

  list(): TemplateDefinition[] {
    return [...this.map.values()];
  }
}
