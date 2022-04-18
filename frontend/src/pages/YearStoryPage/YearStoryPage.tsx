import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import useStore from '../../hooks/useStore';

const YearStoryPage = () => {
  const { companyStore } = useStore();
  return (
    <Page>
      <h5>YearStory</h5>
      {companyStore.company.info.registrationNumber}
      <NavLink to="/sign">
        <button type="button">Fortsätt</button>
      </NavLink>
    </Page>
  );
};

export default YearStoryPage;
