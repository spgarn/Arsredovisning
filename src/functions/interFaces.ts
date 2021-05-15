export interface CompanyAddressInfo {
  name: string
  street: string
  city: string
  zipCode: string
  phone: string
}

export interface CompanyInfo {
  name: string
  registrationNumber: string
  addressInfo: CompanyAddressInfo
}

export interface FiscalYears {
  currentStart: string
  currentEnd: string
  previousStart: string
  previousEnd: string
}

export interface Account {
  name: string
  previousBalance: number
  currentBalance: number
}

export interface Accounts {
  [accountId: string]: Account
}

export interface CompanyBalance {
  activeBalance: { name: string, account: string }[]
  activeBalanceLast: { name: string, account: string }[]
}

export interface Company {
  info: CompanyInfo
  fiscalYears: FiscalYears
  accounts: Accounts
  balance?: CompanyBalance
}
