import balanceAssetsSections, {
  BalanceAssetsSectionsInterface,
} from '../info/balanceSectionsAssetsData';
import balanceEquitySections, {
  BalanceSectionsEquityInterface,
} from '../info/balanceSectionEquityData';
import type { Accounts, Result, Sum } from './interfaces';

function sumAssetsSection(
  accounts: Accounts,
  section: keyof BalanceAssetsSectionsInterface
): Sum {
  return Object.entries(accounts).reduce(
    (sum, [accountId, account]) => {
      const accountNumber = Number(accountId);
      const balanceRow = Object.entries(
        balanceAssetsSections[section].children
      ).find(
        ([
          ,
          {
            accountRange: [min, max],
          },
        ]) => {
          if (accountNumber >= min && accountNumber <= max) return true;
          return false;
        }
      );
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
    },
    {
      current: 0,
      previous: 0,
      children: Object.fromEntries(
        Object.keys(balanceAssetsSections[section].children).map((title) => [
          title,
          { current: 0, previous: 0 },
        ])
      ),
    }
  );
}

function sumSums(sums: Sum[]): Sum {
  return sums.reduce((sum, { current, previous }) => ({
    current: current + sum.current,
    previous: previous + sum.previous,
    children: {},
  }));
}

function calculateBalanceAssets(accounts: Accounts): Result {
  const CashAndBankBalances = sumAssetsSection(accounts, 'CashAndBankBalances');
  const accountsReceivable = sumAssetsSection(accounts, 'accountsReceivable');
  const financialFixedAssets = sumAssetsSection(
    accounts,
    'financialFixedAssets'
  );
  const ipFixedAssets = sumAssetsSection(accounts, 'ipFixedAssets');
  const materialFixedAssets = sumAssetsSection(accounts, 'materialFixedAssets');
  const otherShortClaims = sumAssetsSection(accounts, 'otherShortClaims');
  const prepaidCostsAndDelayedIncome = sumAssetsSection(
    accounts,
    'prepaidCostsAndDelayedIncome'
  );
  const productStock = sumAssetsSection(accounts, 'productStock');
  const shortPlacements = sumAssetsSection(accounts, 'shortPlacements');

  const fixedAssets = sumSums([
    financialFixedAssets,
    ipFixedAssets,
    materialFixedAssets,
  ]);

  const currentAssets = sumSums([
    CashAndBankBalances,
    accountsReceivable,
    otherShortClaims,
    prepaidCostsAndDelayedIncome,
    productStock,
    shortPlacements,
  ]);

  const totalAssts = sumSums([fixedAssets, currentAssets]);

  return {
    fixedAssets,
    currentAssets,
    shortPlacements,
    productStock,
    prepaidCostsAndDelayedIncome,
    otherShortClaims,
    materialFixedAssets,
    ipFixedAssets,
    financialFixedAssets,
    accountsReceivable,
    CashAndBankBalances,
    totalAssts,
  };
}

function sumEquitySection(
  accounts: Accounts,
  section: keyof BalanceSectionsEquityInterface
): Sum {
  return Object.entries(accounts).reduce(
    (sum, [accountId, account]) => {
      const accountNumber = Number(accountId);
      const balanceRow = Object.entries(
        balanceEquitySections[section].children
      ).find(
        ([
          ,
          {
            accountRange: [min, max],
          },
        ]) => {
          if (accountNumber >= min && accountNumber <= max) return true;
          return false;
        }
      );
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
    },
    {
      current: 0,
      previous: 0,
      children: Object.fromEntries(
        Object.keys(balanceEquitySections[section].children).map((title) => [
          title,
          { current: 0, previous: 0 },
        ])
      ),
    }
  );
}

function calculateBalanceEquity(accounts: Accounts): Result {
  const liabilities = sumEquitySection(accounts, 'liabilities');
  const equity = sumEquitySection(accounts, 'equity');

  return {
    liabilities,
    equity,
  };
}

export { calculateBalanceEquity, calculateBalanceAssets as default };
