import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const BalanceSheetPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Balansräkning</h5>
      {companyStore.company.info.name}
      <NavLink to="/result-disposition">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default BalanceSheetPage;
