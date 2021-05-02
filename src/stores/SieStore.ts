import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import { Company } from '../functions/interfaces';
import fileReader from '../functions/fileReader';
import type RootStore from './RootStore';
import translateSie from '../functions/translateSie';

class SieStore {
    company: Company = {
      info: {
        name: '',
        address: '',
        fiscalYearLast: '',
        fiscalYearNow: '',
        registrationNumber: '',
      },
      balance: {
        activeBalance: [],
        activeBalanceLast: [],
      },
      result: {
        activeAccountsLast: [],
        activeAccounts: [],
      },
    } as Company

    isReady: boolean = false;

    rootStore: RootStore

    constructor(rootStore: RootStore) {
      makeObservable(this, {
        company: observable,
        isReady: observable,
        readFile: action,
        // getAccountInfo: action,
      });
      this.rootStore = rootStore;
    }

    async readFile(file: File) {
      const text = await fileReader(file);
      const {
        companyName,
        companyAddressInfo,
        companyResult,
        accounts,
      } = translateSie(text);

      console.log({
        companyName,
        companyAddressInfo,
        companyResult,
        accounts,
      });

      runInAction(() => {
        this.company.info.name = companyName;
        this.isReady = true;
      });
    }
}

export default SieStore;
