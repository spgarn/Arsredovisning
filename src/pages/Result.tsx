import { useState, Dispatch, SetStateAction } from 'react';
import type { CompanyResult, CompanyResults } from '../functions/interfaces';

import resultSectionsData, { ResultSectionInterface } from '../info/resultSectionsData';
import ResultLine from './components/resultLine';

interface ProfitState {
  current: number
  previous: number
}

interface ResultSectionProps {
  section: ResultSectionInterface
  companyResults: CompanyResults
  // eslint-disable-next-line react/require-default-props
  updateProfit?: (current: number, previous: number) => void
}

function ResultSection(
  {
    section,
    companyResults,
    updateProfit,
  } : ResultSectionProps,
) {
  let currentTotalSum = 0;
  let previousTotalSum = 0;

  const renderResultRow = (staticResultData: { title: string, accountRange: [number, number] }) => {
    const { title, accountRange } = staticResultData;
    const [min, max] = accountRange;
    let currentSum = 0;
    let previousSum = 0;

    Object.entries(companyResults).forEach(([account, result]) => {
      if (Number(account) > min && Number(account) > max) return;
      currentSum += result.currentBalance;
      previousSum += result.previousBalance;
    });

    currentTotalSum += currentSum;
    previousTotalSum += previousSum;
    updateProfit(currentTotalSum, previousTotalSum);

    return <ResultLine areaOne={title} areaFour={currentSum} areaFive={previousSum} />;
  };

  return (
    <>
      <ResultLine areaOne={section.title} />
      {section.results.map((staticResultData) => renderResultRow(staticResultData))}

      <ResultLine areaOne={section.sumTitle} areaFour={currentTotalSum} areaFive={previousTotalSum} />

    </>
  );
}

function Result({ results }: { results: CompanyResults }) {
  const [
    operatingProfit, setOperatingProfit,
  ] = useState<ProfitState>({ current: 0, previous: 0 });
  const [
    financialProfit, setFinancialProfit,
  ] = useState<ProfitState>({ current: 0, previous: 0 });
  const [
    profitBeforeTax, setProfitBeforeTax,
  ] = useState<ProfitState>({ current: 0, previous: 0 });
  const [
    yearResult, setYearResult,
  ] = useState<ProfitState>({ current: 0, previous: 0 });

  const updateProfits = (current: number, previous: number) => {
    setOperatingProfit({
      current: operatingProfit.current + current,
      previous: operatingProfit.previous + previous,
    });
    setFinancialProfit({
      current: financialProfit.current + current,
      previous: financialProfit.previous + previous,
    });
    setProfitBeforeTax({
      current: profitBeforeTax.current + current,
      previous: profitBeforeTax.previous + previous,
    });
    setYearResult({
      current: yearResult.current + current,
      previous: yearResult.previous + previous,
    });
  };

  const updateFinancialProfit = (current: number, previous: number) => {
    setFinancialProfit({
      current: financialProfit.current + current,
      previous: financialProfit.previous + previous,
    });
    setProfitBeforeTax({
      current: profitBeforeTax.current + current,
      previous: profitBeforeTax.previous + previous,
    });
    setYearResult({
      current: yearResult.current + current,
      previous: yearResult.previous + previous,
    });
  };

  // const updateProfitBeforeTax = (current: number, previous: number) => {
  //   setProfitBeforeTax({
  //     current: profitBeforeTax.current + current,
  //     previous: profitBeforeTax.previous + previous,
  //   });
  //   setYearResult({
  //     current: yearResult.current + current,
  //     previous: yearResult.previous + previous,
  //   });
  // };

  // const updateYearResult = (current: number, previous: number) => {
  //   setYearResult({
  //     current: yearResult.current + current,
  //     previous: yearResult.previous + previous,
  //   });
  // };

  return (
    <>
      <ResultSection
        section={resultSectionsData.operatingIncome}
        companyResults={results}
        updateProfit={updateProfits}
      />
      <ResultSection
        section={resultSectionsData.operatingCosts}
        companyResults={results}
        updateProfit={updateProfits}
      />
      <ResultLine areaOne="Rörelseresultat" areaFour={operatingProfit.current} areaFive={operatingProfit.previous} />
      <ResultSection
        section={resultSectionsData.financialPosts}
        companyResults={results}
        updateProfit={updateFinancialProfit}
      />
      <ResultLine areaOne="Resultat efter finansiella poster" areaFour={financialProfit.current} areaFive={financialProfit.previous} />
      <ResultSection
        section={resultSectionsData.yearEndDistribution}
        companyResults={results}
        // updateProfit={updateProfitBeforeTax}
      />
      <ResultLine areaOne="Resultat före skatt" areaFour={profitBeforeTax.current} areaFive={profitBeforeTax.previous} />
      <ResultSection
        section={resultSectionsData.taxes}
        companyResults={results}
        // updateProfit={updateYearResult}
      />
      <ResultLine areaOne="Årets resultat" areaFour={yearResult.current} areaFive={yearResult.previous} />

    </>
  );
}

export default Result;
