import { Company } from './interfaces';

const excludedAreas = ['operatingProfit', 'profitBeforeTaxes', 'yearResult', 'financialProfit'];

function calculateInputResults(company: Company) {
  return Object.entries(company.result)
    .forEach(([section, data]) => {
      if (excludedAreas.includes(section)) return;
      // eslint-disable-next-line no-param-reassign
      company.result[section].current = Object.values(data.children)
        .reduce((previous, { current }) => previous + current, 0);
    });
}

export default calculateInputResults;
