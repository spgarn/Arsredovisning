import { Button, TextareaAutosize, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';
import Page from '../../components/Page';
import SubTitle from '../../components/SubTitle';

const YearStoryPage = () => (
  <Page>
    <Card>
      <SubTitle subTitle="Förvaltningsberättelse" />
      <Typography mb={12} variant="h5">
        {' '}
        Allmänt om verksamheten
      </Typography>
      <TextareaAutosize cols={100} minRows={20} />
      <Typography mb={12} mt={12} variant="h5">
        {' '}
        Väsentliga händelser under räkenskapsårets
      </Typography>
      <TextareaAutosize cols={100} minRows={20} />
      <Typography mb={12} mt={12} variant="h5">
        {' '}
        Väsentliga händelser efter räkenskapsårets slut
      </Typography>
      <TextareaAutosize cols={100} minRows={20} />
    </Card>
    <NavLink to="/sign">
      <div style={{ display: 'grid', justifyContent: 'center', marginTop: 12 }}>
        <Button variant="contained">Fortsätt</Button>
      </div>
    </NavLink>
  </Page>
);
export default YearStoryPage;
