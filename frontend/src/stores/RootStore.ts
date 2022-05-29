import CompanyStore from './CompanyStore';

class RootStore {
  companyStore: CompanyStore;

  constructor() {
    this.companyStore = new CompanyStore(this);
  }
}

export default RootStore;
