import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { DependencyContainer } from './container';

const DependencyContext = createContext<DependencyContainer | null>(null);

type Props = {
  container: DependencyContainer;
  children: ReactNode;
};

export function DependencyProvider({ container, children }: Props) {
  return <DependencyContext.Provider value={container}>{children}</DependencyContext.Provider>;
}

export function useDependency<T>(token: symbol): T {
  const container = useContext(DependencyContext);
  if (!container) {
    throw new Error('DependencyProvider is missing in component tree.');
  }
  return container.resolve<T>(token);
}
