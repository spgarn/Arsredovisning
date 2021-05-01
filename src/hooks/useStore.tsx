import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import RootStore from '../stores/RootStore';

const StoreContext = createContext<RootStore | undefined>(undefined);
function StoreProvider({ children }: { children: ReactNode }) {
  const rootStore = new RootStore();

  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}

function useStore() {
  const rootStore = useContext(StoreContext);
  const stores = {
    infoStore: rootStore.infoStore,
  };

  return stores;
}

export { StoreProvider };
export default useStore;
