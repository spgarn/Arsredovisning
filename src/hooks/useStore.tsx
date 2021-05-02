import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import type InfoStore from '../stores/InfoStore';
import RootStore from '../stores/RootStore';

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
function StoreProvider({ children }: { children: ReactNode }) {
  const rootStore = store ?? new RootStore();

  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}

function useStore(): { infoStore: InfoStore} {
  const rootStore = useContext(StoreContext);
  console.log('got rootStore', rootStore);
  if (!rootStore) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return {
    infoStore: rootStore.infoStore,
  };
}

export { StoreProvider };
export default useStore;
