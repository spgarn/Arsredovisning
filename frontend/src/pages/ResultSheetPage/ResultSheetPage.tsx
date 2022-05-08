import { FC, Fragment } from 'react';
import {
  Button, Grid, TextField,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Page from '../../components/Page';
import SingleRow from '../../components/SingleRow';
import SubTitle from '../../components/SubTitle';
import { formatDate, formatCurrency } from '../../functions/formatting';
import useStore from '../../hooks/useStore';
import resultSectionsData from '../../info/resultSectionsData';
import { Company } from '../../functions/interfaces';
import calculateInputResults from '../../functions/calculateInputResults';
import StyledNavLink from '../../components/StyledNavLink';

interface Child
  {
    [resultRowIdentifier: string]: {
      title: string
      accountRange: [number, number]
    }
  }

const ResultSheetPage:FC = () => {
  const { companyStore } = useStore();

  const { result } = companyStore.company;

  // eslint-disable-next-line
  const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

  const navigate = useNavigate();

  const handleSubmit = (company:Company) => {
    calculateInputResults(company);
    companyStore.hydrate(company);
    navigate('/balance-sheet');
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
                    current={`${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(companyStore.company.fiscalYears.currentEnd)} `}
                    previous={companyStore.company.fiscalYears.previousStart && `${formatDate(companyStore.company.fiscalYears.previousStart)} - ${formatDate(companyStore.company.fiscalYears.previousEnd)}`}
                    subTitle="Resultaträkning"
                  />
                  {Object.entries(resultSectionsData).map(([section, sectionData], i) => (
                    <Fragment key={i}>
                      {Object.entries(sectionData.children as Child)
                        .map(([child, childData], id) => (
                          <SingleRow
                            current={(
                              <Field
                                type="number"
                                label={childData?.title}
                                name={`result.${[section]}.children.${[child]}.current`}
                                as={TextField}
                                setField
                                fullWidth
                              />
)}
                            previous={
                          companyStore.company.fiscalYears.previousStart && (
                          <Field
                            type="number"
                            label={childData?.title}
                            name={`result.${[section]}.children.${[child]}.previous`}
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

                      <SingleRow
                        current={formatCurrency(result[section]?.current?.toFixed(2), true)}
                        previous={formatCurrency(result[section]?.previous?.toFixed(2), true)}
                        isSum
                        isBold
                        subTitle={sectionData.sumTitle || sectionData.title}
                      />
                    </Fragment>
                  ))}

                  <Grid item alignSelf="center">
                    <Button type="submit" variant="contained">spara</Button>
                  </Grid>
                </Grid>
              </Card>
            </Page>
          </Form>
        )}

      </Formik>
      <StyledNavLink disabled={!companyStore.isReady} to="/balance-sheet">
        <Button disabled={!companyStore.isReady} variant="contained">Fortsätt</Button>
      </StyledNavLink>
    </>
  );
};

export default ResultSheetPage;
