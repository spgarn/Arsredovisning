import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const ResultSheetPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Resultaträkning</h5>
      {companyStore.company.info.name}
      <NavLink to="/balance-sheet">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default ResultSheetPage;
