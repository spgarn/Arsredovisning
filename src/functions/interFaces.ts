export interface CompanyInfo {
  name:string;
  registrationNumber:string;
  fiscalYearNow:string;
  fiscalYearLast:string;
  address:string
}

export interface CompanyResults {
activeAccounts:{name:string, account:string}[]
activeAccountsLast:{name:string, account:string}[]
}

export interface CompanyBalance {
  activeBalance:{name:string, account:string}[]
  activeBalanceLast:{name:string, account:string}[]
  }

export interface Company {
  companyInfo: CompanyInfo
  companyResults:CompanyResults
  companyBalance:CompanyBalance
}
