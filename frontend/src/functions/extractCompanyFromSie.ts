import type {
  Company, CompanyAddressInfo, FiscalYears, Accounts,
} from './interfaces';

function splitWords(row: string, removeQuotes = false) {
  const words = row
    // Replaces all spaces within quotes with {tempSpace}
    .replace(/"[^"]+"/g, (inQuotes) => inQuotes.replaceAll(' ', '{tempSpace}'))
    .split(' ')
    .map((word) => word.replaceAll('{tempSpace}', ' '));
  if (removeQuotes) return words.map((word) => word.replaceAll('"', ''));
  return words;
}

// E.g. '#FNAMN "Omini AB"'
function getCompanyName(rows: string[]) {
  const row = rows.find((r) => r.startsWith('#FNAMN'));
  if (!row) return 'unknown';

  return splitWords(row, true)[1];
}

// E.g. "#ORGNR 559207-6037"
function getCompanyRegistrationNumber(rows: string[]) {
  const row = rows.find((r) => r.startsWith('#ORGNR')).replace(/(\d{6})(\d{4})/, '$1-$2');

  if (!row) return 'unknown';

  return splitWords(row, true)[1];
}

// E.g. #ADRESS "Ivar Eriksson" "Storgatan 2" "21140 Malmö" "0739143211"
function getCompanyAddressInfo(rows: string[]): CompanyAddressInfo {
  const row = rows.find((r) => r.startsWith('#ADRESS'));
  if (!row) return {} as CompanyAddressInfo;

  const [, name, street, zipCity, phone] = splitWords(row, true);
  return {
    name,
    street,
    city: zipCity.split(' ')[1],
    zipCode: zipCity.split(' ')[0],
    phone,
  };
}

// E.g. "#RAR 0 20200101 20201231", "#RAR -1 20190101 20191231"
function getFiscalYears(rows: string[]): FiscalYears {
  const currentYearRow = rows.find((r) => r.startsWith('#RAR 0'));
  const previousYearRow = rows.find((r) => r.startsWith('#RAR -1'));

  const [, , currentStart, currentEnd] = currentYearRow ? splitWords(currentYearRow) : [];
  const [, , previousStart, previousEnd] = previousYearRow ? splitWords(previousYearRow) : [];

  return {
    currentStart,
    currentEnd,
    previousStart,
    previousEnd,
  };
}

// E.g. #KONTO 1039 "Ackumulerade avskrivningar på patent"
// E.g. #RES 0 3041 -2258200 0
// E.g. #UB 0 1930 150000 0
function getAccounts(rows: string[]) {
  const defaultAccount = () => ({ name: '', previousBalance: 0, currentBalance: 0 });
  return rows.reduce((accounts, row) => {
    // if (row.startsWith('#KONTO')) {
    //   const [, id, name] = splitWords(row, true);
    //   return { ...accounts, [id]: { ...accounts[id], name } };
    // }

    if (row.startsWith('#UB')) {
      const [, year, id, balance] = splitWords(row);
      const balanceKey = Number(year) === -1 ? 'previousBalance' : 'currentBalance';

      return {
        ...accounts,
        [id]: {
          ...(accounts[id] ? accounts[id] : defaultAccount()),
          [balanceKey]: Number(balance),
        },
      };
    }

    if (row.startsWith('#RES')) {
      const [, year, id, balance] = splitWords(row);
      const balanceKey = Number(year) === -1 ? 'previousBalance' : 'currentBalance';
      return {
        ...accounts,
        [id]: {
          ...(accounts[id] ? accounts[id] : defaultAccount()),
          [balanceKey]: Number(balance),
        },

      };
    }
    return accounts;
  }, {} as Accounts);
}

function extractCompanyFromSie(sieString: string): Company {
  const rows = sieString
    .replaceAll('\r', '')
    .split('\n');

  return {
    info: {
      name: getCompanyName(rows),
      registrationNumber: getCompanyRegistrationNumber(rows),
      addressInfo: getCompanyAddressInfo(rows),
    },
    fiscalYears: getFiscalYears(rows),
    accounts: getAccounts(rows),
  };
}

export default extractCompanyFromSie;
