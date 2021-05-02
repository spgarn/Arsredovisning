export interface CompanyInfo {
  name: string;
  address: string
  registrationNumber: string;
  fiscalYearNow: string;
  fiscalYearLast: string;
}

export interface CompanyResult {
  activeAccounts: { name: string, account: string }[]
  activeAccountsLast: { name: string, account: string }[]
}

export interface CompanyBalance {
  activeBalance: { name: string, account: string }[]
  activeBalanceLast: { name: string, account: string }[]
}

export interface Company {
  info: CompanyInfo
  result: CompanyResult
  balance: CompanyBalance
}
