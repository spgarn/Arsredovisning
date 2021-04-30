
export interface CompanyInfo {
  name:string;
  registration_number:string;
  fiscal_year_now:string;
  fiscal_year_last:string;
  address:string
}

export interface CompanyResults {
active_accounts:{name:string,account:string}[]
active_accounts_last:{name:string,account:string}[]
}

export interface CompanyBalance {
  active_balance:{name:string,account:string}[]
  active_balance_last:{name:string,account:string}[]
  }

export interface Company {
  company_info: CompanyInfo
  company_results:CompanyResults
  company_balance:CompanyBalance
}