import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import type CompanyStore from '../stores/CompanyStore';
import RootStore from '../stores/RootStore';

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
function StoreProvider({ children }: { children: ReactNode }) {
  const rootStore = store ?? new RootStore();

  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}

function useStore(): { companyStore: CompanyStore} {
  const rootStore = useContext(StoreContext);
  if (!rootStore) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return {
    companyStore: rootStore.companyStore,
  };
}

export { StoreProvider };
export default useStore;
