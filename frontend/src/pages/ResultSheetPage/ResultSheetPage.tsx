import { FC, Fragment } from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Card from '../../components/Card';
import Page from '../../components/Page';
import SingleRow from '../../components/SingleRow';
import SubTitle from '../../components/SubTitle';
import { formatDate, formatCurrency } from '../../functions/formatting';
import useStore from '../../hooks/useStore';
import resultSectionsData from '../../info/resultSectionsData';

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

  const formik = useFormik({
    initialValues: {
      netIncome: companyStore.company.result.operatingIncome.children.netSales.current,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // eslint-disable-next-line
  const entries = Object.entries as <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];

  return (
    <Page>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="column">

            <SubTitle subTitle="Resultaträkning">
              <Typography variant="h6">{`${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(companyStore.company.fiscalYears.currentEnd)} `}</Typography>
            </SubTitle>
            {Object.entries(resultSectionsData).map(([section, sectionData], i) => (
              <Fragment key={i}>

                {Object.entries(sectionData.children as Child).map(([child, childData]) => (
                  <SingleRow subTitle={childData?.title}>
                    <TextField
                      fullWidth
                      id="netIncome"
                      name="netIncome"
                      value={formatCurrency(result[section]?.children[child]?.current.toFixed(2) || '0', true)}
                      onChange={formik.handleChange}
                      helperText={formik.touched.netIncome && formik.errors.netIncome}
                    />
                  </SingleRow>
                ))}

                <SingleRow isSum isBold subTitle={sectionData.sumTitle || sectionData.title}>
                  {formatCurrency(result[section].current.toFixed(2), true)}
                </SingleRow>
              </Fragment>
            ))}

            <Grid item alignSelf="center">
              <Button type="submit" variant="contained">Fortsätt</Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Page>
  );
};

export default ResultSheetPage;
