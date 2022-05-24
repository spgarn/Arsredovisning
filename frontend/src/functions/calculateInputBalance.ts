import { Company } from './interfaces';

const sumAreas = ['operatingProfit', 'profitBeforeTaxes', 'yearResult', 'financialProfit'];
// reCalculate sections from inputs. Exlude sums.
function calculateInputBalance(company: Company): void {
  return Object.entries(company.balance)
    .forEach(([section, data]) => {
      if (sumAreas.includes(section)) return;
      // eslint-disable-next-line no-param-reassign
      company.balance.assets[section].current = Object.values(data.children)
        .reduce((total, { current }) => total + current, 0);
      // eslint-disable-next-line no-param-reassign
      company.balance.assets[section].previous = Object.values(data.children)
        .reduce((total, { previous }) => total + previous, 0);
      // eslint-disable-next-line no-param-reassign
      company.balance.equity[section].current = Object.values(data.children)
        .reduce((total, { current }) => total + current, 0);
      // eslint-disable-next-line no-param-reassign
      company.balance.equity[section].previous = Object.values(data.children)
        .reduce((total, { previous }) => total + previous, 0);
    });
}
// Just put in subSummed values to the sums.
// function sumInputResults(company: Company): void {
//   // eslint-disable-next-line no-param-reassign
//   company.balance.operatingProfit.current = company.balance.operatingIncome.current
//     + company.balance.operatingCosts.current;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.financialProfit.current = company.balance.operatingProfit.current
//     + company.balance.financialPosts.current;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.profitBeforeTaxes.current = company.balance.financialProfit.current
//     + company.balance.yearEndDistribution.current;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.yearResult.current = company.balance.profitBeforeTaxes.current
//     + company.balance.taxes.current;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.operatingProfit.previous = company.balance.operatingIncome.previous
//     + company.balance.operatingCosts.previous;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.financialProfit.previous = company.balance.operatingProfit.previous
//     + company.balance.financialPosts.previous;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.profitBeforeTaxes.previous = company.balance.financialProfit.previous
//     + company.balance.yearEndDistribution.previous;
//   // eslint-disable-next-line no-param-reassign
//   company.balance.yearResult.previous = company.balance.profitBeforeTaxes.previous
//     + company.balance.taxes.previous;
// }

export { calculateInputBalance as default };
