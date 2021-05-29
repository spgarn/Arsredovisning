import { FC, ReactElement } from 'react';
import formatCurrency from '../functions/formatting';

import type { Result as CompanyResult } from '../functions/interfaces';

import resultSectionsData from '../info/resultSectionsData';
import ResultLine from './components/resultLine';

interface ResultProps {
  result: CompanyResult
}

// eslint-disable-next-line
const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

const Result: FC<ResultProps> = ({ result }): ReactElement => (
  <>
    {Object.entries(resultSectionsData).map(([section, sectionData]) => (
      <ResultLine
        key={section}
        areaOne={sectionData.title}
        areaFour={formatCurrency(result[section].current.toFixed(2))}
        areaFive={formatCurrency(result[section].previous.toFixed(2))}
      />
    ))}
  </>
);

export default Result;
