import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const NotesPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>Noter</h5>
      {companyStore.company.info.registrationNumber}
      <NavLink to="/year-story">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default NotesPage;
