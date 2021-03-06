import { FC, Fragment } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FastField, Form, Formik } from 'formik';
import Card from '../../components/Card';
import Page from '../../components/Page';
import MultiRow from '../../components/MultiRow';
import SubTitle from '../../components/SubTitle';
import { formatDate, formatCurrency } from '../../functions/formatting';
import useStore from '../../hooks/useStore';
import resultSectionsData from '../../info/resultSectionsData';
import { Company } from '../../functions/interfaces';
import calculateInputResults, {
  sumInputResults,
} from '../../functions/calculateInputResults';
import StyledNavLink from '../../components/StyledNavLink';

interface Child {
  [resultRowIdentifier: string]: {
    title: string;
    accountRange: [number, number];
  };
}

const ResultSheetPage: FC = observer(() => {
  const { companyStore } = useStore();

  const { result } = companyStore.company;

  // eslint-disable-next-line
  const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

  const handleSubmit = (company: Company) => {
    calculateInputResults(company);
    sumInputResults(company);
    companyStore.hydrate(company);
  };

  return (
    <>
      <Formik
        onSubmit={(e) => handleSubmit(e)}
        initialValues={companyStore.company}
      >
        {() => (
          <Form>
            <Page>
              <Card>
                <Grid container direction="column">
                  <SubTitle
                    current={`${formatDate(
                      companyStore.company.fiscalYears.currentStart
                    )} - ${formatDate(
                      companyStore.company.fiscalYears.currentEnd
                    )} `}
                    previous={
                      companyStore.company.fiscalYears.previousStart &&
                      `${formatDate(
                        companyStore.company.fiscalYears.previousStart
                      )} - ${formatDate(
                        companyStore.company.fiscalYears.previousEnd
                      )}`
                    }
                    subTitle="Resultatr??kning"
                  />
                  {Object.entries(resultSectionsData).map(
                    ([section, sectionData], i) => (
                      <Fragment key={i}>
                        {Object.entries(sectionData.children as Child).map(
                          ([child, childData], id) => (
                            <MultiRow
                              current={
                                <FastField
                                  type="number"
                                  label={childData?.title}
                                  name={`result.${[section]}.children.${[
                                    child,
                                  ]}.current`}
                                  as={TextField}
                                  setField
                                  fullWidth
                                />
                              }
                              previous={
                                companyStore.company.fiscalYears
                                  .previousStart && (
                                  <FastField
                                    type="number"
                                    label={childData?.title}
                                    name={`result.${[section]}.children.${[
                                      child,
                                    ]}.previous`}
                                    as={TextField}
                                    setField
                                    fullWidth
                                  />
                                )
                              }
                              key={id}
                              subTitle={childData?.title}
                            />
                          )
                        )}

                        <MultiRow
                          current={formatCurrency(
                            result[section]?.current?.toFixed(2),
                            true
                          )}
                          previous={
                            companyStore.company.fiscalYears.previousStart &&
                            formatCurrency(
                              result[section]?.previous?.toFixed(2),
                              true
                            )
                          }
                          isSum
                          isBold
                          subTitle={sectionData.sumTitle || sectionData.title}
                        />
                      </Fragment>
                    )
                  )}

                  <Grid item alignSelf="center">
                    <Button type="submit" variant="contained">
                      spara
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Page>
          </Form>
        )}
      </Formik>
      <StyledNavLink disabled={!companyStore.isReady} to="/balance-sheet">
        <Button disabled={!companyStore.isReady} variant="contained">
          Forts??tt
        </Button>
      </StyledNavLink>
    </>
  );
});

export default ResultSheetPage;
