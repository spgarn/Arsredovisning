export interface CompanyAddressInfo {
  name: string;
  street: string;
  city: string;
  zipCode: string;
  phone: string;
}

export interface CompanyInfo {
  name: string;
  registrationNumber: string;
  addressInfo: CompanyAddressInfo;
}

export interface FiscalYears {
  currentStart: string;
  currentEnd: string;
  previousStart: string;
  previousEnd: string;
}

export interface Account {
  name: string;
  previousBalance: number;
  currentBalance: number;
}

export interface Accounts {
  [accountId: string]: Account;
}

export interface Sum {
  current: number;
  previous: number;
  children: {
    [resultRowIdentifier: string]: {
      current: number;
      previous: number;
    };
  };
}

export type Result = {
  [section: string]: Sum;
};

export interface Balance {
  [section: string]: Sum;
}

export interface Notes {
  accountingPrinciples?: {
    comment: string;
    hasFixedPriceAssignments: boolean;
    hasSelfMadeGoods: boolean;
  };
  averageAmountEmployees?: {
    comment: string;
    amount: string;
  };
  providedCollateral?: {
    comment: string;
  };
  contingentLiabilities?: {
    comment: string;
  };
  exceptionalIncomeExpenses?: {
    comment: string;
  };
  assetsProvisionsLiabilities?: {
    comment: string;
  };
  financialArrangements?: {
    comment: string;
  };
  otherComments?: {
    comment: string;
  };
}

export interface Company {
  info: CompanyInfo;
  fiscalYears: FiscalYears;
  accounts: Accounts;
  result?: Result;
  balance?: { equity: Balance; assets: Balance };
  notes: Notes;
}
