function getAllWords(row: string, removeQuotes: boolean = false) {
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

  return getAllWords(row, true)[1];
}

// E.g. #ADRESS "Ivar Eriksson" "Storgatan 2" "21140 Malmö" "0739143211"
function getCompanyAddressInfo(rows: string[]) {
  const row = rows.find((r) => r.startsWith('#ADRESS'));
  if (!row) return 'unknown';

  const words = getAllWords(row, true);
  return {
    name: words[1],
    street: words[2],
    city: words[3].split(' ')[1],
    zipCode: words[3].split(' ')[0],
    phone: words[4],
  };
}

// E.g. #RES 0 3041 -2258200 0
function getCompanyResult(rows: string[]) {
  return rows
    .filter((row) => row.startsWith('#RES'))
    .map((row) => {
      const [,, id, balance] = getAllWords(row);
      return { id, balance };
    });
}

// E.g. #KONTO 1039 "Ackumulerade avskrivningar på patent"
function getAccounts(rows: string[]) {
  const accounts: { [id: string] : { name: string }} = {};
  rows
    .filter((row) => row.startsWith('#KONTO'))
    .forEach((row) => {
      const [, id, name] = getAllWords(row, true);
      accounts[id] = { name };
    });
  return accounts;
}

function translateSie(sieString: string) {
  const rows = sieString
    .replaceAll('\r', '')
    .split('\n');
  return {
    companyName: getCompanyName(rows),
    companyAddressInfo: getCompanyAddressInfo(rows),
    companyResult: getCompanyResult(rows),
    accounts: getAccounts(rows),
  };
}

export default translateSie;
