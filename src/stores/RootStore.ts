import SieStore from './SieStore';

class RootStore {
  sieStore: SieStore

  constructor() {
    this.sieStore = new SieStore(this);
  }
}

export default RootStore;
