interface ResultSectionInterface {
  title: string
  sumTitle: string
  children: {
    title: string
    accountRange: [number, number]
  }[]
}

interface ResultSectionsInterface {
  operatingIncome: ResultSectionInterface
  operatingCosts: ResultSectionInterface
  financialPosts: ResultSectionInterface
  yearEndDistribution: ResultSectionInterface
  taxes: ResultSectionInterface
  operatingProfit: ResultSectionInterface
  financialProfit: ResultSectionInterface
  profitBeforeTaxes: ResultSectionInterface
  yearResult: ResultSectionInterface
}

const resultSections: ResultSectionsInterface = {
  operatingIncome: {
    title: 'Nettoomsättning',
    sumTitle: 'Summa rörelseintäkter, lagerförändringar m.m.',
    children: [
      {
        title: 'Rörelsens intäkter',
        accountRange: [
          3000,
          3999,
        ],
      },
    ],
  },
  operatingCosts: {
    title: 'Rörelsekostnader',
    sumTitle: 'Summa rörelsekostnader',
    children: [
      {
        title: 'Råvaror och förnödenheter',
        accountRange: [
          4000,
          4999,
        ],
      },
      {
        title: 'Övriga externa kostnader',
        accountRange: [
          5000,
          6999,
        ],
      },
      {
        title: 'Personalkostnader',
        accountRange: [
          7000,
          7699,
        ],
      },
      {
        title: 'Nedskrivningar och återföring av nedskrivningar',
        accountRange: [
          7700,
          7799,
        ],
      },
      {
        title: 'Avskrivningar enligt plan',
        accountRange: [
          7800,
          7899,
        ],
      },
      {
        title: 'Övriga rörelsekostnader',
        accountRange: [
          7900,
          7999,
        ],
      },
    ],
  },
  financialPosts: {
    title: 'Finansiella poster',
    sumTitle: 'Summa finansiella poster',
    children: [
      {
        title: 'Resultat från andelar i koncernbolag',
        accountRange: [
          8000,
          8099,
        ],
      },
      {
        title: 'Resultat från andelar i gemensamt styrda företag',
        accountRange: [
          8100,
          8199,
        ],
      },
      {
        title: 'Resultat från övriga finansiella anläggningstillgångar',
        accountRange: [
          8200,
          8299,
        ],
      },
      {
        title: 'Övriga ränteintäkter och liknande resultatposter',
        accountRange: [
          8300,
          8399,
        ],
      },
      {
        title: 'Räntekostnader och liknande resultatposter',
        accountRange: [
          8400,
          8499,
        ],
      },
    ],
  },
  yearEndDistribution: {
    title: 'Bokslutsdispositioner',
    sumTitle: 'Summa bokslutsdispositioner',
    children: [
      {
        title: 'Bokslutsdispositioner',
        accountRange: [
          8800,
          8899,
        ],
      },
    ],
  },
  taxes: {
    title: 'Skatter',
    sumTitle: '',
    children: [
      {
        title: 'Skatte på årets resultat',
        accountRange: [
          8910,
          8999,
        ],
      },
    ],
  },
  operatingProfit: {
    title: 'Rörelseresultat',
    sumTitle: '',
    children: [],
  },
  financialProfit: {
    title: 'Resultat efter finansiella poster',
    sumTitle: '',
    children: [],
  },
  profitBeforeTaxes: {
    title: 'Resultat före skatt',
    sumTitle: '',
    children: [],
  },
  yearResult: {
    title: 'Årets resultat',
    sumTitle: '',
    children: [],
  },

};

export type { ResultSectionInterface, ResultSectionsInterface };
export default resultSections;
