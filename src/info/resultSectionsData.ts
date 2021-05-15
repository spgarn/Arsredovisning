interface ResultSectionInterface {
  title: string
  sumTitle: string
  results: {
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
}

const resultSections: ResultSectionsInterface = {
  operatingIncome: {
    title: 'Nettoomsättning',
    sumTitle: 'Summa rörelseintäkter, lagerförändringar m.m.',
    results: [
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
    results: [
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
    results: [
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
    results: [
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
    results: [
      {
        title: 'Skatte på årets resultat',
        accountRange: [
          8910,
          8999,
        ],
      },
    ],
  },
};

export type { ResultSectionInterface, ResultSectionsInterface };
export default resultSections;
