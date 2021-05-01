import InfoStore from './InfoStore';

class RootStore {
  infoStore: InfoStore

  constructor() {
    this.infoStore = new InfoStore(this);
  }
}

export default RootStore;
