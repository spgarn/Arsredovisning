import { action, makeObservable, observable, runInAction } from 'mobx';
import merge from 'lodash.merge';
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
    result: {
      operatingIncome: { current: 0, previous: 0, children: {} },
      operatingCosts: { current: 0, previous: 0, children: {} },
      financialPosts: { current: 0, previous: 0, children: {} },
      yearEndDistribution: { current: 0, previous: 0, children: {} },
      taxes: { current: 0, previous: 0, children: {} },
      operatingProfit: { current: 0, previous: 0, children: {} },
      financialProfit: { current: 0, previous: 0, children: {} },
      profitBeforeTaxes: { current: 0, previous: 0, children: {} },
      yearResult: { current: 0, previous: 0, children: {} },
    },
    balance: {
      assets: {
        ipFixedAssets: { current: 0, previous: 0, children: {} },
        materialFixedAssets: { current: 0, previous: 0, children: {} },
        financialFixedAssets: { current: 0, previous: 0, children: {} },
        estimatedResult: { current: 0, previous: 0, children: {} },
        productStock: { current: 0, previous: 0, children: {} },
        accountsReceivable: { current: 0, previous: 0, children: {} },
        otherShortClaims: { current: 0, previous: 0, children: {} },
        prepaidCostsAndDelayedIncome: { current: 0, previous: 0, children: {} },
        shortPlacements: { current: 0, previous: 0, children: {} },
        CashAndBankBalances: { current: 0, previous: 0, children: {} },
        fixedAssets: { current: 0, previous: 0, children: {} },
        currentAssets: { current: 0, previous: 0, children: {} },
        totalAssts: { current: 0, previous: 0, children: {} },
      },
      equity: {
        liabilites: { current: 0, previous: 0, children: {} },
        equity: { current: 0, previous: 0, children: {} },
      },
    },
    notes: {},
  };

  isReady = false;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      company: observable,
      isReady: observable,
      hydrate: action,
    });

    this.rootStore = rootStore;

    const savedCompany = JSON.parse(localStorage.getItem('companyInfo'));
    if (savedCompany) this.hydrate(savedCompany);
  }

  hydrate(company: Company): void {
    runInAction(() => {
      this.company = merge(this.company, company);
      this.isReady = true;
      localStorage.setItem('companyInfo', JSON.stringify(this.company));
    });
  }
}

export default CompanyStore;
