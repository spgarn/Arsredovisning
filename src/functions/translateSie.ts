function getNthWord(row: string, nthWord: number) {
  const word = row
    // Replaces all spaces within quotes with {tempSpace}
    .replace(/"[^"]+"/g, (inQuotes) => inQuotes.replaceAll(' ', '{tempSpace}'))
    .split(' ')[nthWord - 1];
  return word.replaceAll('{tempSpace}', ' ');
}

function getCompanyName(rows: string[]) {
  const row = rows.find((r) => r.startsWith('FNAMN'));
  if (!row) return 'unknown';

  // E.g. 'FNAMN "Omini AB"' -> 'Omini AB'
  return getNthWord(row, 2)
    .replaceAll('"', '');
}

// function getAccountInfo(rows: string[]) {
//   const filteredResultReport = rows.filter((row) => row.startsWith('RES'));

//     const accountNumbers = filteredResultReport.map((r) => accountNumber.push(r[6] + r[7] + r[8] + r[9]));

//     rows.map((data) => accountNumber.some((k) => (k === data[6] + data[7] + data[8] + data[9] ? data.includes('KONTO') && accountNames.push(data) : false)));

//     accountNames.forEach((word) => {
//       const [, , ...last] = word.split(' ');
//       rest.push(last.join(' '));
//     });
//   }
// }

function translateSie(sieString: string) {
  const rows = sieString.split('#');
  return {
    companyName: getCompanyName(rows),
  };
}

export default translateSie;
