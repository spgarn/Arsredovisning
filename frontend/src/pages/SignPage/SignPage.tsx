// import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const SignPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Befattningshavare</h5>
      {companyStore.company.fiscalYears.currentEnd}
      <Button>
        Generera PDF
      </Button>
    </Page>
  );
};

export default SignPage;
