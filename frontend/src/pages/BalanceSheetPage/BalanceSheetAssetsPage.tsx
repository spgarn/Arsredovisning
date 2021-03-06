import { Button, Grid, TextField } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import { Fragment } from 'react';
import Card from '../../components/Card';
import MultiRow from '../../components/MultiRow';
import Page from '../../components/Page';
import SubTitle from '../../components/SubTitle';
import calculateInputBalance from '../../functions/calculateInputBalance';
import { formatCurrency, formatDate } from '../../functions/formatting';
import { Balance } from '../../functions/interfaces';
import useStore from '../../hooks/useStore';
import balanceAssetsSections from '../../info/balanceSectionsAssetsData';

interface Children {
  [resultRowIdentifier: string]: {
    title: string;
    accountRange: [number, number];
    current?: number;
    previous?: number;
  };
}

const BalanceSheetPage = () => {
  const { companyStore } = useStore();

  const { balance } = companyStore.company;

  // eslint-disable-next-line
  const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

  const handleSubmit = (assets: Balance) => {
    calculateInputBalance(assets);
    balance.assets = assets;
    // companyStore.hydrate();
  };

  return (
    <Formik
      onSubmit={(e) => handleSubmit(e)}
      initialValues={companyStore?.company?.balance?.assets}
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
                  subTitle="Balansr??kning"
                />
                {Object.entries(balanceAssetsSections)?.map(
                  ([section, sectionData], i) => (
                    <Fragment key={i}>
                      {sectionData.title && (
                        <MultiRow
                          isNoBorder
                          isSum
                          isBold
                          subTitle={sectionData?.title}
                        />
                      )}
                      {Object.entries(sectionData.children as Children)
                        .filter(
                          ([child]) =>
                            balance?.assets?.[section]?.children[child]
                              ?.current > 0 ||
                            balance?.assets?.[section]?.children[child]
                              ?.previous > 0
                        )
                        .map(([child, childData], id) => (
                          <MultiRow
                            current={
                              <FastField
                                type="number"
                                label={childData?.title}
                                name={`${[section]}.children.${[
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
                                  name={`${[section]}.children.${[
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
                        ))}
                      {Object.entries(sectionData.children as Children)
                        .filter(
                          ([child]) =>
                            balance[section]?.children[child].current > 0 ||
                            balance[section]?.children[child].previous > 0
                        )
                        .map(([child, childData], id) => (
                          <MultiRow
                            current={
                              <FastField
                                type="number"
                                label={childData?.title}
                                name={`balance.${[section]}.children.${[
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
                                  name={`balance.${[section]}.children.${[
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
                        ))}

                      <MultiRow
                        current={formatCurrency(
                          balance.assets[section]?.current?.toFixed(2),
                          true
                        )}
                        previous={
                          companyStore.company.fiscalYears.previousStart &&
                          formatCurrency(
                            balance.assets[section]?.previous?.toFixed(2),
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
                    Forts??tt
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Page>
        </Form>
      )}
    </Formik>
  );
};

export default BalanceSheetPage;
