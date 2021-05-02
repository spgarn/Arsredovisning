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
      } = translateSie(text);
      runInAction(() => {
        this.company.info.name = companyName;
        this.isReady = true;
      });
    }

  // getAccountInfo() {
  //   const accountNames = [];
  //   const rest = [];

  //   const rows = this.fileText.split('#');

  //   const filteredResultReport = rows.filter((row) => row.startsWith('RES 0'));

  // eslint-disable-next-line max-len
  //   const accountNumbers = filteredResultReport.map((r) => accountNumber.push(r[6] + r[7] + r[8] + r[9]));

  // eslint-disable-next-line max-len
  //   rows.map((data) => accountNumber.some((k) => (k === data[6] + data[7] + data[8] + data[9] ? data.includes('KONTO') && accountNames.push(data) : false)));

  //   accountNames.forEach((word) => {
  //     const [, , ...last] = word.split(' ');
  //     rest.push(last.join(' '));
  //   });
  // }
}

export default SieStore;
