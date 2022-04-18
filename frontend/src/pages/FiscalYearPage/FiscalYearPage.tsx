import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';

const FiscalYearPage = () => (
  <Page>
    <h5>Välj räkenskapsår</h5>
    <NavLink to="/company-info">
      <button type="button">Fortsätt</button>
    </NavLink>
  </Page>
);

export default FiscalYearPage;
