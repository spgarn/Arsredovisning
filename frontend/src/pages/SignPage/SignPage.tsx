// import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const SignPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Befattningshavare</h5>
      {companyStore.company.fiscalYears.currentEnd}
      {/* <NavLink to="/balance-sheet">
        <button type="button">Fortsätt</button>
      </NavLink> */}
      Generera PDF
    </Page>
  );
};

export default SignPage;
