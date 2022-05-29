import { formatCurrency } from '../../functions/formatting';
import type { Balance as CompanyBalance } from '../../functions/interfaces';
import balanceEquitySections from '../../info/balanceSectionEquityData';
import ResultLine from '../components/resultLine';

interface IProps {
  balance: CompanyBalance;
}

// eslint-disable-next-line
const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

const BalanceEquity = ({ balance }: IProps) => (
  <>
    {Object.entries(balanceEquitySections).map(([section, sectionData]) =>
      balance[section]?.current || balance[section]?.previous ? (
        <ResultLine
          border
          key={section}
          areaOne={sectionData.title || sectionData.sumTitle}
          areaFour={formatCurrency(balance[section]?.current?.toFixed(2))}
          areaFive={formatCurrency(balance[section]?.previous?.toFixed(2))}
        />
      ) : null
    )}
  </>
);
export default BalanceEquity;
