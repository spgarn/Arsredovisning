interface BalanceSectionInterface {
  title: string
  sumTitle: string
  children: {
    [resultRowIdentifier: string]: {
      title: string
      accountRange: [number, number]
    }
  }
}

interface BalanceAssetsSectionsInterface {
  ipFixedAssets: BalanceSectionInterface
  materialFixedAssets: BalanceSectionInterface
  financialFixedAssets: BalanceSectionInterface
  productStock: BalanceSectionInterface
  accountsReceivable: BalanceSectionInterface
  otherShortClaims: BalanceSectionInterface
  prepaidCostsAndDelayedIncome: BalanceSectionInterface
  shortPlacements: BalanceSectionInterface
  CashAndBankBalances: BalanceSectionInterface
  fixedAssets: BalanceSectionInterface
  currentAssets: BalanceSectionInterface
  totalAssts: BalanceSectionInterface
}

const balanceAssetsSections: BalanceAssetsSectionsInterface = {
  ipFixedAssets: {
    title: 'Immateriella Anläggningstillgångar',
    sumTitle: 'Summa Immateriella Anläggningstillgångar',
    children: {
      patents: {
        title: 'Patent och Licenser',
        accountRange: [
          1020,
          1059,
        ],
      },
      tenancy: {
        title: 'Hyresrätt och liknande rättigheter',
        accountRange: [
          1060,
          1069,
        ],
      },
      goodwill: {
        title: 'Hyresrätt och liknande rättigheter',
        accountRange: [
          1070,
          1079,
        ],
      },
      fees: {
        title: 'Patent och Licenser',
        accountRange: [
          1080,
          1087,
        ],
      },
      prepaidPatentFees: {
        title: 'Förskott avseende immateriella anläggningstillgångar',
        accountRange: [
          1088,
          1088,
        ],
      },
    },
  },
  materialFixedAssets: {
    title: 'Materiella Anläggningstillgångar',
    sumTitle: 'Summa Materiella Anläggningstillgångar',
    children: {
      buildingsAndProperties: {
        title: 'Byggnader och mark',
        accountRange: [
          1100,
          1119,
        ],
      },
      costOnOthersProperty: {
        title: 'Förbättringsutgifter på annans fastighet',
        accountRange: [
          1120,
          1129,
        ],
      },
      buildingsAndProperties2: {
        title: 'Byggnader och mark',
        accountRange: [
          1130,
          1179,
        ],
      },
      activeOrPrepaidProperties: {
        title: 'Pågående nyanläggningar och förskott avseende materiella anläggningstillgångar',
        accountRange: [
          1180,
          1189,
        ],
      },
      buildingsAndProperties3: {
        title: 'Byggnader och mark',
        accountRange: [
          1190,
          1199,
        ],
      },
      machines: {
        title: 'Maskiner och andra tekniska anläggningar',
        accountRange: [
          1210,
          1219,
        ],
      },
      inventoryAndTools: {
        title: 'Inventarier, verktyg och installationer',
        accountRange: [
          1220,
          1259,
        ],
      },
      inventoryAndTools2: {
        title: 'Inventarier, verktyg och installationer',
        accountRange: [
          1261,
          1279,
        ],
      },
      otherFixedAssets: {
        title: 'Övriga materiella anläggningstillgångar',
        accountRange: [
          1290,
          1299,
        ],
      },
    },
  },
  financialFixedAssets: {
    title: 'Finansiella Anläggningstillgångar',
    sumTitle: 'Summa Finansiella Anläggningstillgångar',
    children: {
      groupStocks: {
        title: 'Andelar i koncernföretag',
        accountRange: [
          1310,
          1319,
        ],
      },
      claimGroupCompany: {
        title: 'Fordringar hos koncernföretag',
        accountRange: [
          1320,
          1329,
        ],
      },
      stockCompanyOfInterest: {
        title: 'Andelar i intresseföretag och gemensamt styrda företag',
        accountRange: [
          1330,
          1335,
        ],
      },
      interetsInOtherCompanies: {
        title: 'Ägarintressen i övriga företag',
        accountRange: [
          1336,
          1337,
        ],
      },
      stocksCompanyOfInterest2: {
        title: 'Andelar i intresseföretag och gemensamt styrda företag',
        accountRange: [
          1338,
          1339,
        ],
      },
      claimInteretsCompany: {
        title: 'Fordringar hos intresseföretag och gemensamt styrda företag',
        accountRange: [
          1340,
          1345,
        ],
      },
      claimOtherCompaniesOfInterest: {
        title: 'Fordringar hos övriga företag som det finns ett ägarintresse',
        accountRange: [
          1346,
          1347,
        ],
      },
      claimInteretsCompany2: {
        title: 'Fordringar hos intresseföretag och gemensamt styrda företag',
        accountRange: [
          1348,
          1349,
        ],
      },
      otherLongSecurities: {
        title: 'Andra långfristiga värdepappersinnehav',
        accountRange: [
          1350,
          1359,
        ],
      },
      loanToOwner: {
        title: 'Lån till delägare eller närstående',
        accountRange: [
          1360,
          1369,
        ],
      },
      otherLongClaims: {
        title: 'Andra långfristiga fordringar',
        accountRange: [
          1380,
          1389,
        ],
      },
    },
  },
  fixedAssets: {
    title: undefined,
    sumTitle: 'Totalt anläggningstillgångar',
    children: {},
  },
  productStock: {
    title: 'Lager, produkter i arbete och pågående arbeten',
    sumTitle: 'Summa tillgångar, lagerförändringar m.m.',
    children: {
      rawMaterials: {
        title: 'Råvaror och förnödenheter',
        accountRange: [
          1410,
          1431,
        ],
      },
      materialsUnderManufacturing: {
        title: 'Varor under tillverkning',
        accountRange: [
          1432,
          1437,
        ],
      },
      rawMaterials2: {
        title: 'Råvaror och förnödenheter',
        accountRange: [
          1438,
          1438,
        ],
      },
      materialsUnderManufacturing2: {
        title: 'Varor under tillverkning',
        accountRange: [
          1439,
          1449,
        ],
      },
      doneMaterials: {
        title: 'Färdiga varor och handelsvaror',
        accountRange: [
          1450,
          1469,
        ],
      },
      activeWorkForOthers: {
        title: 'Pågående arbete för annans räkning',
        accountRange: [
          1470,
          1479,
        ],
      },
      prepaidInvoice: {
        title: 'Förskott till leverantörer',
        accountRange: [
          1480,
          1489,
        ],
      },
      otherStockAssets: {
        title: 'Övriga lagertillgångar',
        accountRange: [
          1490,
          1499,
        ],
      },
    },
  },

  accountsReceivable: {
    title: 'Kundfordringar',
    sumTitle: 'Summa kundfordringar',
    children: {
      accountsReceivable: {
        title: 'Kundfordringar',
        accountRange: [
          1500,
          1559,
        ],
      },
      claimGroupCompany: {
        title: 'Fordringar hos koncernföretag',
        accountRange: [
          1560,
          1569,
        ],
      },
      claimGroupCompany2: {
        title: 'Fordringar hos koncernföretag',
        accountRange: [
          1660,
          1669,
        ],
      },
      claimCompanyOfInterest: {
        title: 'Fordringar hos intresseföretag och gemensamt styrda företag',
        accountRange: [
          1570,
          1572,
        ],
      },
      claimCompanyOfInterest2: {
        title: 'Fordringar hos intresseföretag och gemensamt styrda företag',
        accountRange: [
          1670,
          1672,
        ],
      },
      claimOtherCompanies: {
        title: 'Fordringar hos övriga företag som det finns ett ägarintresse i',
        accountRange: [
          1573,
          1573,
        ],
      },
      claimOtherCompanies2: {
        title: 'Fordringar hos övriga företag som det finns ett ägarintresse i',
        accountRange: [
          1673,
          1673,
        ],
      },
      claimCompanyOfInterest3: {
        title: 'Fordringar hos intresseföretag och gemensamt styrda företag',
        accountRange: [
          1574,
          1579,
        ],
      },
      claimCompanyOfInterest4: {
        title: 'Fordringar hos intresseföretag och gemensamt styrda företag',
        accountRange: [
          1674,
          1679,
        ],
      },
      OtherClaims: {
        title: 'Övriga fordringar',
        accountRange: [
          1590,
          1619,
        ],
      },
      OtherClaims2: {
        title: 'Övriga fordringar',
        accountRange: [
          1630,
          1659,
        ],
      },
      OtherClaims3: {
        title: 'Övriga fordringar',
        accountRange: [
          1680,
          1689,
        ],
      },
    },
  },
  otherShortClaims: {
    title: 'Förutbetalda kostnader och upplupna intäkter',
    sumTitle: 'Summa Förutbetalda kostnader och upplupna intäkter',
    children: {
      NotYetInvoiced: {
        title: 'Upparbetad men ej fakturerad intäkt',
        accountRange: [
          1620,
          1629,
        ],
      },
      tenancy: {
        title: 'Tecknat men ej inbetalat kapital',
        accountRange: [
          1690,
          1699,
        ],
      },
    },
  },
  prepaidCostsAndDelayedIncome: {
    title: 'Övriga kortfristiga fordringar',
    sumTitle: 'Summa Övriga kortfristiga fordringar',
    children: {
      prepaidCostsAndDelayedIncome: {
        title: 'Förutbetalda kostnader och upplupna intäkter',
        accountRange: [
          1700,
          1799,
        ],
      },

    },
  },
  shortPlacements: {
    title: 'Kortfristiga placeringar',
    sumTitle: 'Summa Kortfristiga placeringar',
    children: {
      otherShortSecurities: {
        title: 'Övriga kortfristiga placeringar',
        accountRange: [
          1800,
          1859,
        ],
      },
      stocksGroupCompany: {
        title: 'Andelar i koncernföretag',
        accountRange: [
          1860,
          1869,
        ],
      },
      otherShortSecurities2: {
        title: 'Övriga kortfristiga placeringar',
        accountRange: [
          1870,
          1899,
        ],
      },

    },

  },
  CashAndBankBalances: {
    title: 'Kassa och bank',
    sumTitle: 'Summa Kassa och bank',
    children: {
      cashAndBank: {
        title: 'Kassa och bank',
        accountRange: [
          1900,
          1989,
        ],
      },
      tenancy: {
        title: 'Redovisningsmedel',
        accountRange: [
          1990,
          1999,
        ],
      },

    },
  },
  currentAssets: {
    title: undefined,
    sumTitle: 'Totalt Omsättningstillgångar',
    children: {},
  },
  totalAssts: {
    title: undefined,
    sumTitle: 'Totalt tillgångar',
    children: {},
  },

};

export type { BalanceSectionInterface, BalanceAssetsSectionsInterface };

export default balanceAssetsSections;
