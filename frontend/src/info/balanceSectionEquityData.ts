interface BalanceSectionInterface {
  title: string;
  sumTitle: string;
  children: {
    [resultRowIdentifier: string]: {
      title: string;
      accountRange: [number, number];
    };
  };
}

interface BalanceSectionsEquityInterface {
  equity: BalanceSectionInterface;
  liabilities: BalanceSectionInterface;
  // estimatedResult: BalanceSectionInterface
}

const balanceEquitySections: BalanceSectionsEquityInterface = {
  equity: {
    title: 'Eget kapital',
    sumTitle: 'Summa eget kapital',
    children: {
      ShareCapital: {
        title: 'Aktiekapital',
        accountRange: [2081, 2081],
      },
      unRegistredShareCapital: {
        title: 'Ej registrerat aktiekapital',
        accountRange: [2082, 2082],
      },
      ShareCapital2: {
        title: 'Aktiekapital',
        accountRange: [2083, 2084],
      },
      revalueFond: {
        title: 'Uppskrivningsfond',
        accountRange: [2085, 2085],
      },
      reserveFond: {
        title: 'Reservfond',
        accountRange: [2086, 2086],
      },
      fixedOverFond: {
        title: 'Bunden överkursfond',
        accountRange: [2087, 2087],
      },
      balancedResult: {
        title: 'Balanserat resultat',
        accountRange: [2090, 2091],
      },
      balancedResult2: {
        title: 'Balanserat resultat',
        accountRange: [2093, 2095],
      },
      balancedResult3: {
        title: 'Balanserat resultat',
        accountRange: [2098, 2098],
      },
      freeUpFond: {
        title: 'Balanserat resultat',
        accountRange: [2097, 2097],
      },
      periodFond: {
        title: 'Periodiseringsfonder',
        accountRange: [2110, 2149],
      },
      ackumilatedWriteOffs: {
        title: 'Ackumulerade överavskrivningar',
        accountRange: [2150, 2159],
      },
      untaxedReserves: {
        title: 'Övriga obeskattade reserver',
        accountRange: [2160, 2199],
      },
      pensions: {
        title:
          'Avsättningar för pensioner och liknande förpliktelser enligt lagen (1967:531) om tryggande av pensionsutfästelse m.m.',
        accountRange: [2210, 2219],
      },
      otherSavings: {
        title: 'Övriga avsättningar',
        accountRange: [2220, 2229],
      },
      otherPensions: {
        title: 'Övriga avsättningar för pensioner och liknande förpliktelser',
        accountRange: [2220, 2229],
      },
      otherSavings2: {
        title: 'Övriga avsättningar',
        accountRange: [2230, 2239],
      },
    },
  },
  liabilities: {
    title: 'Skulder',
    sumTitle: 'Summa skulder',
    children: {
      obligationLoan: {
        title: 'Obligationslån',
        accountRange: [2310, 2329],
      },
      checkCredit: {
        title: 'Checkräkningskredit',
        accountRange: [2330, 2339],
      },
      otherDebtToInstitute: {
        title: 'Övriga skulder till kreditinstitut',
        accountRange: [2340, 2359],
      },
      debtToGroupCompnay: {
        title: 'Skulder till koncernföretag',
        accountRange: [2360, 2369],
      },
      debtToCompanyOfInterest: {
        title: 'Skulder till intresseföretag och gemensamt styrda företag',
        accountRange: [2370, 2372],
      },
      debtToOtherCompaniesOfInterest: {
        title: 'Skulder till övriga företag som det finns ett ägarintresse i',
        accountRange: [2373, 2373],
      },
      debtToCompanyOfInterest2: {
        title: 'Skulder till intresseföretag och gemensamt styrda företag',
        accountRange: [2374, 2379],
      },
      otherDebts: {
        title: 'Övriga skulder',
        accountRange: [2390, 2399],
      },
      otherDebtToInstitutes: {
        title: 'Övriga skulder till kreditinstitut',
        accountRange: [2410, 2419],
      },
      prepaidCustomerInvoice: {
        title: 'Förskott från kunder',
        accountRange: [2420, 2429],
      },
      onGoingWorkForOther: {
        title: 'Pågående arbete för annans räkning',
        accountRange: [2430, 2439],
      },
      accountsPayable: {
        title: 'Leverantörsskulder',
        accountRange: [2440, 2449],
      },
      invoicedNotYetWorked: {
        title: 'Fakturerad men ej upparbetad intäkt',
        accountRange: [2450, 2459],
      },
      debtGroupCompany: {
        title: 'Skulder till koncernföretag',
        accountRange: [2460, 2469],
      },
      debtCompanyOfInterest: {
        title: 'Skulder till intresseföretag och gemensamt styrda företag',
        accountRange: [2470, 2472],
      },
      debtOtherCompanyOfInterest: {
        title: 'Skulder till övriga företag som det finns ett ägarintresse i',
        accountRange: [2473, 2473],
      },
      debtCompanyOfInterest2: {
        title: 'Skulder till intresseföretag och gemensamt styrda företag',
        accountRange: [2474, 2479],
      },
      checkCreditCount: {
        title: 'Checkräkningskredit',
        accountRange: [2480, 2489],
      },
      otherDebt: {
        title: 'Övriga skulder',
        accountRange: [2490, 2491],
      },
      changeDebt: {
        title: 'Växelskulder',
        accountRange: [2492, 2492],
      },
      otherDebt2: {
        title: 'Övriga skulder',
        accountRange: [2493, 2499],
      },
      taxDebt: {
        title: 'Skatteskulder',
        accountRange: [2500, 2599],
      },
      otherDebt3: {
        title: 'Övriga skulder',
        accountRange: [2600, 2799],
      },
      otherDebt4: {
        title: 'Övriga skulder',
        accountRange: [2810, 2859],
      },
      debtGroupCompany2: {
        title: 'Skulder till koncernföretag',
        accountRange: [2860, 2869],
      },
      debtCompanyOfInterest3: {
        title: 'Skulder till intresseföretag och gemensamt styrda företag',
        accountRange: [2870, 2872],
      },
      debtOtherCompanyOfInterest2: {
        title: 'Skulder till övriga företag som det finns ett ägarintresse i',
        accountRange: [2873, 2873],
      },
      debtCompanyOfInterest4: {
        title: 'Skulder till intresseföretag och gemensamt styrda företag',
        accountRange: [2874, 2879],
      },
      otherDebt5: {
        title: 'Övriga skulder',
        accountRange: [2880, 2899],
      },
      preiodCostAndIncome: {
        title: 'Upplupna kostnader och förutbetalda intäkter',
        accountRange: [2900, 2999],
      },
    },
  },
  // estimatedResult: {
  //   title: undefined,
  //   sumTitle: 'Beräknat resultat',
  //   children: {},
  // },
};

export type { BalanceSectionInterface, BalanceSectionsEquityInterface };

export default balanceEquitySections;
