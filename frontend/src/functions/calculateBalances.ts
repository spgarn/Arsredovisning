import balanceSections, { BalanceSectionsInterface } from '../info/balanceSectionsData';
import type { Accounts, Result, Sum } from './interfaces';

function sumSection(
  accounts: Accounts,
  section: keyof BalanceSectionsInterface,
): Sum {
  return Object.entries(accounts)
    .reduce((sum, [accountId, account]) => {
      const accountNumber = Number(accountId);
      const balanceRow = Object.entries(balanceSections[section].children)
        .find(([, { accountRange: [min, max] }]) => {
          if (accountNumber >= min && accountNumber <= max) return true;
          return false;
        });
      if (!balanceRow) return sum;

      const balanceRowIdentifier = balanceRow[0];
      const resultRowReference = sum.children[balanceRowIdentifier];
      return {
        current: sum.current + account.currentBalance,
        previous: sum.previous + account.previousBalance,
        children: {
          ...sum.children,
          [balanceRowIdentifier]: {
            current: resultRowReference.current + account.currentBalance,
            previous: resultRowReference.previous + account.previousBalance,
          },
        },
      };
    }, {
      current: 0,
      previous: 0,
      children: Object.fromEntries(Object.keys(balanceSections[section].children)
        .map((title) => [title, { current: 0, previous: 0 }])),
    });
}

function sumSums(sums: Sum[]): Sum {
  return sums.reduce((sum, { current, previous }) => ({
    current: current + sum.current,
    previous: previous + sum.previous,
    children: {},
  }));
}

function calculateBalance(accounts: Accounts): Result {
  const CashAndBankBalances = sumSection(accounts, 'CashAndBankBalances');
  const accountsReceivable = sumSection(accounts, 'accountsReceivable');
  const financialFixedAssets = sumSection(accounts, 'financialFixedAssets');
  const ipFixedAssets = sumSection(accounts, 'ipFixedAssets');
  const liabilities = sumSection(accounts, 'liabilities');
  const equity = sumSection(accounts, 'equity');
  const materialFixedAssets = sumSection(accounts, 'materialFixedAssets');
  const otherShortClaims = sumSection(accounts, 'otherShortClaims');
  const prepaidCostsAndDelayedIncome = sumSection(accounts, 'prepaidCostsAndDelayedIncome');
  const productStock = sumSection(accounts, 'productStock');
  const shortPlacements = sumSection(accounts, 'shortPlacements');

  const fixedAssets = sumSums([financialFixedAssets, ipFixedAssets, materialFixedAssets]);

  const currentAssets = sumSums([CashAndBankBalances,
    accountsReceivable, otherShortClaims,
    prepaidCostsAndDelayedIncome,
    productStock, shortPlacements]);

  const totalAssts = sumSums([fixedAssets, currentAssets]);

  const estimatedResult = ({
    current: totalAssts.current + liabilities.current + equity.current,
    previous: totalAssts.previous + liabilities.previous + equity.previous,
    children: {},
  });

  return {
    fixedAssets,
    currentAssets,
    shortPlacements,
    productStock,
    prepaidCostsAndDelayedIncome,
    otherShortClaims,
    materialFixedAssets,
    liabilities,
    equity,
    ipFixedAssets,
    financialFixedAssets,
    accountsReceivable,
    CashAndBankBalances,
    totalAssts,
    estimatedResult,
  };
}

export default calculateBalance;
