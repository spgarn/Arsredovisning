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
  currentBalance: number
  previousBalance: number
}

export interface CompanyResults {
  [account: string]: CompanyResult
}

export interface CompanyBalance {
  activeBalance: { name: string, account: string }[]
  activeBalanceLast: { name: string, account: string }[]
}

export interface Company {
  info: CompanyInfo
  result: CompanyResults
  balance: CompanyBalance
}
