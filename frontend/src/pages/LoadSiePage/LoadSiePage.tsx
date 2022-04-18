import { NavLink } from 'react-router-dom';
import DropArea from '../../components/DropArea';
import Page from '../../components/Page';

const LoadSie = () => (
  <Page>
    <DropArea />
    <NavLink to="/check-info">
      <button type="button">Generate PDF</button>
    </NavLink>
  </Page>
);

export default LoadSie;
