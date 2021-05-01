import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import { Company } from '../functions/interfaces';
import fileReader from '../functions/fileReader';
import type RootStore from './RootStore';

class InfoStore {
    company: Company = {
      companyInfo: {
        name: '', address: '', fiscalYearLast: '', fiscalYearNow: '', registrationNumber: '',
      },
      companyBalance: { activeBalance: [], activeBalanceLast: [] },
      companyResults: { activeAccountsLast: [], activeAccounts: [] },
    } as Company

    fileText: string;

    isReady: boolean = false;

    rootStore: RootStore

    constructor(rootStore: RootStore) {
      makeObservable(this, {
        company: observable,
        fileText: observable,
        isReady: observable,
        readFile: action,
        getCompanyInfo: action,
        // getAccountInfo: action,
      });
      this.rootStore = rootStore;
    }

    async readFile(file: File) {
      const text = await fileReader(file);
      this.fileText = text;
      runInAction(() => {
        this.fileText = text;
      });
    }

    getCompanyInfo() {
      const rows = this.fileText.split('#');
      const result = rows.map((r) => (r.startsWith('FNAMN') ? r : undefined));
      const filteredResult = result.filter((k) => k !== undefined);
      const nameWords = filteredResult[0].split(' ');
      const name = nameWords.join(' ').match(/"(.*)"/)[1];
      this.company.companyInfo.name = name;

      this.isReady = true;
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

export default InfoStore;
