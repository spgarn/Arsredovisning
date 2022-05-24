import { FC, ReactElement } from 'react';
import { formatCurrency } from '../../functions/formatting';
import type { Balance as CompanyBalance } from '../../functions/interfaces';
import balanceSectionsData from '../../info/balanceSectionsData';
import ResultLine from '../components/resultLine';

interface BalanceProps {
  balance: CompanyBalance
}

// eslint-disable-next-line
const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

const Balance: FC<BalanceProps> = ({ balance }): ReactElement => (
  <>
    {Object.entries(balanceSectionsData).map(([section, sectionData]) => (
      balance[section]?.current || balance[section]?.previous ? (
        <ResultLine
          key={section}
          areaOne={sectionData.title || sectionData.sumTitle}
          areaFour={formatCurrency(balance[section]?.current?.toFixed(2))}
          areaFive={formatCurrency(balance[section]?.previous?.toFixed(2))}
        />
      ) : null
    ))}
  </>
);
export default Balance;
