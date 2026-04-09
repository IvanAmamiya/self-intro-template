import type { ThemeDefinition } from './contracts';

export class ThemeRegistry {
  private readonly map = new Map<string, ThemeDefinition>();

  register(definition: ThemeDefinition): void {
    this.map.set(definition.id, definition);
  }

  get(id: string): ThemeDefinition | undefined {
    return this.map.get(id);
  }

  list(): ThemeDefinition[] {
    return [...this.map.values()];
  }
}
