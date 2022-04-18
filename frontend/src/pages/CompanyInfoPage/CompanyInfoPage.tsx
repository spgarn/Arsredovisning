import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const CompanyInfoPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>företagsuppgifter</h5>
      {companyStore.company.info.name}
      <NavLink to="/result-sheet">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default CompanyInfoPage;
