interface ResultSectionInterface {
  title: string;
  sumTitle: string;
  children: {
    [resultRowIdentifier: string]: {
      title: string;
      accountRange: [number, number];
    };
  };
}

interface ResultSectionsInterface {
  operatingIncome: ResultSectionInterface;
  operatingCosts: ResultSectionInterface;
  financialPosts: ResultSectionInterface;
  yearEndDistribution: ResultSectionInterface;
  taxes: ResultSectionInterface;
  operatingProfit: ResultSectionInterface;
  financialProfit: ResultSectionInterface;
  profitBeforeTaxes: ResultSectionInterface;
  yearResult: ResultSectionInterface;
}

const resultSections: ResultSectionsInterface = {
  operatingIncome: {
    title: 'Rörelsens intäkter',
    sumTitle: 'Summa rörelseintäkter, lagerförändringar m.m.',
    children: {
      netSales: {
        title: 'Nettoomsättning',
        accountRange: [3000, 3799],
      },
      changedInventory: {
        title: 'Förändring av lager',
        accountRange: [3800, 3899],
      },
      otherIncomes: {
        title: 'Övriga rörelseintäkter',
        accountRange: [3900, 3999],
      },
    },
  },
  operatingCosts: {
    title: 'Rörelsekostnader',
    sumTitle: 'Summa rörelsekostnader',
    children: {
      rawMaterialsConsumables: {
        title: 'Råvaror och förnödenheter',
        accountRange: [4000, 4999],
      },
      otherExternalExpenses: {
        title: 'Övriga externa kostnader',
        accountRange: [5000, 6999],
      },
      staffCosts: {
        title: 'Personalkostnader',
        accountRange: [7000, 7699],
      },
      writeDownsReversalOfWriteDowns: {
        title: 'Nedskrivningar och återföring av nedskrivningar',
        accountRange: [7700, 7799],
      },
      depreciationAccordingToPlan: {
        title: 'Avskrivningar enligt plan',
        accountRange: [7800, 7899],
      },
      otherOperatingExpenses: {
        title: 'Övriga rörelsekostnader',
        accountRange: [7900, 7999],
      },
    },
  },
  financialPosts: {
    title: 'Finansiella poster',
    sumTitle: 'Summa finansiella poster',
    children: {
      profitParticipationsGroupCompanies: {
        title: 'Resultat från andelar i koncernbolag',
        accountRange: [8000, 8099],
      },
      profitSharesJointlyControlledCompanies: {
        title: 'Resultat från andelar i gemensamt styrda företag',
        accountRange: [8100, 8199],
      },
      profitOtherFinancialFixedAssets: {
        title: 'Resultat från övriga finansiella anläggningstillgångar',
        accountRange: [8200, 8299],
      },
      otherInterestIncomeAndSimilarItems: {
        title: 'Övriga ränteintäkter och liknande resultatposter',
        accountRange: [8300, 8399],
      },
      interestExpensesAndSimilarIncomeItems: {
        title: 'Räntekostnader och liknande resultatposter',
        accountRange: [8400, 8499],
      },
    },
  },
  yearEndDistribution: {
    title: 'Bokslutsdispositioner',
    sumTitle: 'Summa bokslutsdispositioner',
    children: {
      changeInAccruals: {
        title: 'Förändring av periodiseringsfonder för juridisk person och enskild näringsidkare',
        accountRange: [8810, 8819],
      },
      appropriationsAllCompanyForms: {
        title: 'Bokslutsdispositioner för samtliga företagsformer',
        accountRange: [8820, 8899],
      },
    },
  },
  taxes: {
    title: 'Skatter',
    sumTitle: '',
    children: {
      taxesYearProfit: {
        title: 'Skatter på årets resultat',
        accountRange: [8910, 8999],
      },
    },
  },
  operatingProfit: {
    title: 'Rörelseresultat',
    sumTitle: '',
    children: {},
  },
  financialProfit: {
    title: 'Resultat efter finansiella poster',
    sumTitle: '',
    children: {},
  },
  profitBeforeTaxes: {
    title: 'Resultat före skatt',
    sumTitle: '',
    children: {},
  },
  yearResult: {
    title: 'Årets resultat',
    sumTitle: '',
    children: {},
  },
};

export type { ResultSectionInterface, ResultSectionsInterface };
export default resultSections;
