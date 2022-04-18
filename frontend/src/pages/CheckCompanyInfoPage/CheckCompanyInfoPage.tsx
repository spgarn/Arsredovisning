import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const CheckCompanyInfo = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Kontrollera dina företagsuppgifter</h5>
      {companyStore.company.info.name}
      <NavLink to="/fiscal-year">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default CheckCompanyInfo;
