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

interface BalanceSectionsInterface {
  operatingIncome: BalanceSectionInterface
}

const balanceSections: BalanceSectionsInterface = {
  operatingIncome: {
    title: 'Tillgångar',
    sumTitle: 'Summa tillgångar, lagerförändringar m.m.',
    children: {
      netSales: {
        title: 'Tillgångar',
        accountRange: [
          0,
          2999,
        ],
      },
    },
  },

};

export type { BalanceSectionInterface, BalanceSectionsInterface };
export default balanceSections;
