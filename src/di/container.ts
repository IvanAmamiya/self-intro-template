export class DependencyContainer {
  private readonly services = new Map<symbol, unknown>();

  register<T>(token: symbol, service: T): void {
    this.services.set(token, service);
  }

  resolve<T>(token: symbol): T {
    const service = this.services.get(token);
    if (!service) {
      throw new Error(`Dependency not found for token: ${String(token)}`);
    }
    return service as T;
  }
}
