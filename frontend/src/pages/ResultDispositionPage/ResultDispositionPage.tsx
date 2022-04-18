import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const ResultDispositionPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Resultatdisposition</h5>
      {companyStore.company.info.registrationNumber}
      <NavLink to="/notes">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default ResultDispositionPage;
