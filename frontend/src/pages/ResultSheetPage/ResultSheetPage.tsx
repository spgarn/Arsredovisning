import {
  Button, Card, styled, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import InputField from '../../components/InputField';
import Page from '../../components/Page';
import StyledNavLink from '../../components/StyledNavLink';
import useStore from '../../hooks/useStore';

const StyledCard = styled(Card)`
gap: 2rem;
margin-top: 2rem;
padding:1rem;
`;

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
      <StyledCard>
        <Typography variant="h5">Resultaträkning</Typography>
        <form onSubmit={formik.handleSubmit}>
          <InputField title="Nettoomsättning">

            <TextField
              fullWidth
              id="thisYear"
              name="thisYear"
              label="ThisYear"
              value={formik.values.thisYear}
              onChange={formik.handleChange}
              helperText={formik.touched.thisYear && formik.errors.thisYear}
            />
            <TextField
              fullWidth
              id="lastYear"
              name="lastYear"
              label="LastYear"
              type="lastYear"
              value={formik.values.lastYear}
              onChange={formik.handleChange}
              helperText={formik.touched.lastYear && formik.errors.lastYear}
            />
          </InputField>

          <StyledNavLink to="/result-sheet">
            <Button variant="contained">Fortsätt</Button>
          </StyledNavLink>
        </form>
      </StyledCard>
    </Page>
  );
};

export default ResultSheetPage;
