import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Card from '../../components/Card';
import Page from '../../components/Page';
import SingleRow from '../../components/SingleRow';
import SubTitle from '../../components/SubTitle';
import { formatDate } from '../../functions/formatting';
import useStore from '../../hooks/useStore';

const ResultSheetPage = () => {
  const { companyStore } = useStore();

  const formik = useFormik({
    initialValues: {
      thisYear: '700 540 kr',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Page>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="column">

            <SubTitle subTitle="Resultaträkning">
              <Typography variant="h6">{`${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(companyStore.company.fiscalYears.currentEnd)} `}</Typography>
            </SubTitle>
            <SingleRow subTitle="Nettoomsättning">
              <TextField
                fullWidth
                id="thisYear"
                name="thisYear"
                value={formik.values.thisYear}
                onChange={formik.handleChange}
                helperText={formik.touched.thisYear && formik.errors.thisYear}
              />
            </SingleRow>
            <SingleRow subTitle="Nettoomsättning">
              <TextField
                fullWidth
                id="thisYear"
                name="thisYear"
                value={formik.values.thisYear}
                onChange={formik.handleChange}
                helperText={formik.touched.thisYear && formik.errors.thisYear}
              />
            </SingleRow>
            <SingleRow subTitle="Nettoomsättning">
              <TextField
                fullWidth
                id="thisYear"
                name="thisYear"
                value={formik.values.thisYear}
                onChange={formik.handleChange}
                helperText={formik.touched.thisYear && formik.errors.thisYear}
              />
            </SingleRow>
            <SingleRow subTitle="Nettoomsättning">
              <TextField
                fullWidth
                id="thisYear"
                name="thisYear"
                value={formik.values.thisYear}
                onChange={formik.handleChange}
                helperText={formik.touched.thisYear && formik.errors.thisYear}
              />
            </SingleRow>

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
