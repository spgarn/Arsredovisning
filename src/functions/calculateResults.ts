import resultSections, { ResultSectionsInterface } from '../info/resultSectionsData';
import type { Accounts, Result, Sum } from './interfaces';

function sumSection(
  accounts: Accounts,
  section: keyof ResultSectionsInterface,
): Sum {
  return Object.entries(accounts)
    .reduce((sum, [accountId, account]) => {
      const accountNumber = Number(accountId);
      const isInRange = resultSections[section].children
        .some(({ accountRange: [min, max] }) => {
          if (accountNumber >= min && accountNumber <= max) return true;
          return false;
        });
      if (!isInRange) return sum;

      return {
        current: sum.current + account.currentBalance,
        previous: sum.previous + account.previousBalance,
      };
    }, { current: 0, previous: 0 });
}

function sumSums(sums: Sum[]): Sum {
  return sums.reduce((sum, { current, previous }) => ({
    current: current + sum.current,
    previous: previous + sum.previous,
  }));
}

function calculateResults(accounts: Accounts): Result {
  const operatingIncome = sumSection(accounts, 'operatingIncome');
  const operatingCosts = sumSection(accounts, 'operatingCosts');
  const financialPosts = sumSection(accounts, 'financialPosts');
  const yearEndDistribution = sumSection(accounts, 'yearEndDistribution');
  const taxes = sumSection(accounts, 'taxes');

  const operatingProfit = sumSums([operatingIncome, operatingCosts]);
  const financialProfit = sumSums([operatingProfit, financialPosts]);
  const profitBeforeTaxes = sumSums([financialProfit, yearEndDistribution]);
  const yearResult = sumSums([profitBeforeTaxes, taxes]);

  return {
    operatingIncome,
    operatingCosts,
    financialPosts,
    yearEndDistribution,
    taxes,
    operatingProfit,
    financialProfit,
    profitBeforeTaxes,
    yearResult,
  };
}

export default calculateResults;
