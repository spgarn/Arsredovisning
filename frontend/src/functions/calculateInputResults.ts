import { Company } from './interfaces';

const sumAreas = [
  'operatingProfit',
  'profitBeforeTaxes',
  'yearResult',
  'financialProfit',
];
// reCalculate sections from inputs. Exlude sums.
function calculateInputResults(company: Company): void {
  return Object.entries(company.result).forEach(([section, data]) => {
    if (sumAreas.includes(section)) return;
    // eslint-disable-next-line no-param-reassign
    company.result[section].current = Object.values(data.children).reduce(
      (total, { current }) => total + current,
      0
    );
    // eslint-disable-next-line no-param-reassign
    company.result[section].previous = Object.values(data.children).reduce(
      (total, { previous }) => total + previous,
      0
    );
  });
}
// Just put in subSummed values to the sums.
function sumInputResults(company: Company): void {
  // eslint-disable-next-line no-param-reassign
  company.result.operatingProfit.current =
    company.result.operatingIncome.current +
    company.result.operatingCosts.current;
  // eslint-disable-next-line no-param-reassign
  company.result.financialProfit.current =
    company.result.operatingProfit.current +
    company.result.financialPosts.current;
  // eslint-disable-next-line no-param-reassign
  company.result.profitBeforeTaxes.current =
    company.result.financialProfit.current +
    company.result.yearEndDistribution.current;
  // eslint-disable-next-line no-param-reassign
  company.result.yearResult.current =
    company.result.profitBeforeTaxes.current + company.result.taxes.current;
  // eslint-disable-next-line no-param-reassign
  company.result.operatingProfit.previous =
    company.result.operatingIncome.previous +
    company.result.operatingCosts.previous;
  // eslint-disable-next-line no-param-reassign
  company.result.financialProfit.previous =
    company.result.operatingProfit.previous +
    company.result.financialPosts.previous;
  // eslint-disable-next-line no-param-reassign
  company.result.profitBeforeTaxes.previous =
    company.result.financialProfit.previous +
    company.result.yearEndDistribution.previous;
  // eslint-disable-next-line no-param-reassign
  company.result.yearResult.previous =
    company.result.profitBeforeTaxes.previous + company.result.taxes.previous;
}

export { calculateInputResults as default, sumInputResults };
