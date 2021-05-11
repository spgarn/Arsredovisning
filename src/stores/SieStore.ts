import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import { Company } from '../functions/interfaces';
import fileReader from '../functions/fileReader';
import type RootStore from './RootStore';
import translateSie from '../functions/translateSie';

class SieStore {
    company: Company = { result: {}, balance: {}, info: {} } as Company

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
        companyRegistrationNumber,
        companyAddressInfo,
        companyFiscalYears,
        companyResult,
        accounts,
      } = translateSie(text);

      console.log({
        companyName,
        companyFiscalYears,
        companyAddressInfo,
        companyResult,
        accounts,
      });

      runInAction(() => {
        this.company.result = [...companyResult];
        this.company.info.name = companyName;
        this.company.info.registrationNumber = companyRegistrationNumber;
        this.company.info.fiscalYearNowStart = companyFiscalYears.fiscalYearNowStart;
        this.company.info.fiscalYearNowEnd = companyFiscalYears.fiscalYearNowEnd;
        this.company.info.fiscalYearLastStart = companyFiscalYears.fiscalYearLastStart;
        this.company.info.fiscalYearLastEnd = companyFiscalYears.fiscalYearLastEnd;
        this.isReady = true;
      });
    }
}

export default SieStore;
