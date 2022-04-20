import {
  Box,
  Button, Grid, TextField, Typography
} from '@mui/material';
import { useFormik } from 'formik';
import Card from '../../components/Card';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const ResultSheetPage = () => {
  const { companyStore } = useStore();

  const formik = useFormik({
    initialValues: {
      thisYear: '700 540 kr',
      lastYear: '245 000 kr',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Page>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={8} direction="column">
            <Grid item>
              <Typography variant="h5">Resultaträkning</Typography>
            </Grid>
            <Grid item>
              <Box ml={16}>
                <Grid container justifyContent="space-between" >
                  <Grid item alignSelf="center">
                    <Typography >Nettoomsättning</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={8}>
                      <Grid item>
                        <TextField
                          fullWidth
                          id="thisYear"
                          name="thisYear"
                          label="This year"
                          value={formik.values.thisYear}
                          onChange={formik.handleChange}
                          helperText={formik.touched.thisYear && formik.errors.thisYear}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          fullWidth
                          id="lastYear"
                          name="lastYear"
                          label="Last year"
                          type="lastYear"
                          value={formik.values.lastYear}
                          onChange={formik.handleChange}
                          helperText={formik.touched.lastYear && formik.errors.lastYear}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item alignSelf="center">
              <Button type="submit" variant="contained">Fortsätt</Button>
            </Grid>
          </Grid>
        </form>
      </Card >
    </Page >
  );
};

export default ResultSheetPage;
