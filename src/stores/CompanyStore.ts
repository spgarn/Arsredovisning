import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import { Company } from '../functions/interfaces';
import type RootStore from './RootStore';

class CompanyStore {
    company: Company = {
      info: {
        name: '',
        registrationNumber: '',
        addressInfo: {
          name: '',
          street: '',
          city: '',
          zipCode: '',
          phone: '',
        },
      },
      fiscalYears: {
        currentStart: '',
        currentEnd: '',
        previousStart: '',
        previousEnd: '',
      },
      accounts: {},
    }

    isReady: boolean = false;

    rootStore: RootStore

    constructor(rootStore: RootStore) {
      makeObservable(this, {
        company: observable,
        isReady: observable,
        hydrate: action,
      });

      this.rootStore = rootStore;
    }

    hydrate(company: Company) {
      runInAction(() => {
        this.company = company;
        this.isReady = true;
      });
    }
}

export default CompanyStore;
