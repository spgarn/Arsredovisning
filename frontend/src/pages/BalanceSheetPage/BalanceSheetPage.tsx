import { FC, Fragment } from 'react';
import {
  Button, Grid, TextField,
} from '@mui/material';
import {
  FastField, Form, Formik,
} from 'formik';
import Card from '../../components/Card';
import Page from '../../components/Page';
import MultiRow from '../../components/MultiRow';
import SubTitle from '../../components/SubTitle';
import { formatDate, formatCurrency } from '../../functions/formatting';
import useStore from '../../hooks/useStore';
import { Company } from '../../functions/interfaces';
import calculateInputResults from '../../functions/calculateInputResults';
import balanceSections from '../../info/balanceSectionsData';

interface Child
  {
    [resultRowIdentifier: string]: {
      title: string
      accountRange: [number, number]
      current?:number
      previous?:number
    }
  }

const BalanceSheetPage:FC = () => {
  const { companyStore } = useStore();

  const { balance } = companyStore.company;

  // eslint-disable-next-line
  const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

  const handleSubmit = (company:Company) => {
    calculateInputResults(company);
    companyStore.hydrate(company);
  };

  return (
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
                  current={`${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(companyStore.company.fiscalYears.currentEnd)} `}
                  previous={companyStore.company.fiscalYears.previousStart && `${formatDate(companyStore.company.fiscalYears.previousStart)} - ${formatDate(companyStore.company.fiscalYears.previousEnd)}`}
                  subTitle="Balansräkning"
                />
                {Object.entries(balanceSections).map(([section, sectionData], i) => (
                  <Fragment key={i}>
                    {sectionData.title && (
                    <MultiRow
                      isNoBorder
                      isSum
                      isBold
                      subTitle={sectionData.title}
                    />
                    )}
                    {Object.entries(sectionData.children as Child)
                      .filter(([child]) => balance[section].children[child].current > 0 || balance[section].children[child].previous > 0)
                      .map(([child, childData], id) => (
                        <MultiRow
                          current={(
                            <FastField
                              type="number"
                              label={childData?.title}
                              name={`balance.${[section]}.children.${[child]}.current`}
                              as={TextField}
                              setField
                              fullWidth
                            />
)}
                          previous={(
                          companyStore.company.fiscalYears.previousStart && (
                          <FastField
                            type="number"
                            label={childData?.title}
                            name={`balance.${[section]}.children.${[child]}.previous`}
                            as={TextField}
                            setField
                            fullWidth
                          />
                          )
)}
                          key={id}
                          subTitle={childData?.title}
                        />
                      ))}

                    <MultiRow
                      current={formatCurrency(balance[section]?.current?.toFixed(2), true)}
                      previous={companyStore.company.fiscalYears.previousStart
                        && formatCurrency(balance[section]?.previous?.toFixed(2), true)}
                      isSum
                      isBold
                      subTitle={sectionData.sumTitle || sectionData.title}
                    />
                  </Fragment>
                ))}

                <Grid item alignSelf="center">
                  <Button type="submit" variant="contained">Fortsätt</Button>
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
