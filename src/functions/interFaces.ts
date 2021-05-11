export interface CompanyInfo {
  name: string;
  address: string
  registrationNumber: string;
  fiscalYearNowStart: string;
  fiscalYearNowEnd: string;
  fiscalYearLastStart: string;
  fiscalYearLastEnd: string;
}

export interface CompanyResult {
   name: string, account: string, year:string, balance:string
}

export interface CompanyBalance {
  activeBalance: { name: string, account: string }[]
  activeBalanceLast: { name: string, account: string }[]
}

export interface Company {
  info: CompanyInfo
  result: CompanyResult[]
  balance: CompanyBalance
}
