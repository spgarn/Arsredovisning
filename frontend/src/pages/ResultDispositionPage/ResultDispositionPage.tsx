import {
  Button, Grid, Switch, TextField,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import Card from '../../components/Card';
import MultiRow from '../../components/MultiRow';
import Page from '../../components/Page';
import SubTitle from '../../components/SubTitle';
import { formatDate } from '../../functions/formatting';
import { Company } from '../../functions/interfaces';
import useStore from '../../hooks/useStore';

const ResultDispositionPage = ():JSX.Element => {
  const { companyStore } = useStore();

  const handleSubmit = (e:Company) => {
    console.log(e);
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
                  subTitle="Resultatdisposition"
                />
                <MultiRow
                  isNoBorder
                  isSum
                  isBold
                  subTitle="Förfogade medel"
                />
                <MultiRow
                  current={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                  previous={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                  subTitle="Balanserat resultat"
                />
                <MultiRow
                  current={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                  previous={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                  subTitle="Årest resultat"
                />
                <MultiRow
                  isSum
                  isBold
                  subTitle="Summa"
                  current="100kr"
                  previous="100kr"
                />
                <MultiRow
                  isNoBorder
                  isSum
                  isBold
                  subTitle="Förslag till årstämma"
                />
                <MultiRow
                  subTitle="Utdelas till aktieägare"
                  current={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                  previous={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                />
                <MultiRow
                  subTitle="Återbetalning av aktieägartillskott"
                  current={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                  previous={(
                    <Field
                      type="number"
                      name=""
                      as={TextField}
                      setField
                      fullWidth
                    />
)}
                />
                <MultiRow
                  subTitle="Balanseras i en ny räkning"
                  current="100kr"
                  previous="100kr"
                  isSum
                  isBold
                />

                <MultiRow subTitle="Förändringar i eget kapital" isSum isBold isNoBorder current="Lämna kommentar om förändring av kapital?" previous={<Switch />} />

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

export default ResultDispositionPage;
