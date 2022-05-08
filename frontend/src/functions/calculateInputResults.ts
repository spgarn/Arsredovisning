import { Company } from './interfaces';

const excludedAreas = ['operatingProfit', 'profitBeforeTaxes', 'yearResult', 'financialProfit'];

function calculateInputResults(company: Company) {
  console.log(JSON.parse(JSON.stringify(company.result)));
  return Object.entries(company.result)
    .map(([section, data]) => {
      if (excludedAreas.includes(section)) return;
      company.result[section].current = Object.values(data.children)
        .reduce((previous, { current }) => previous + current, 0);
    });
}

export default calculateInputResults;
