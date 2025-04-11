import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { RootStore } from '../stores/RootStore';

const StoreContext = createContext<RootStore | null>(null);

export function StoreProvider({ children, store }: { children: ReactNode; store: RootStore }) {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
}