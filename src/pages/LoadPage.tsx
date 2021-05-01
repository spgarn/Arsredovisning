import { observer } from 'mobx-react-lite';
import Page from '../components/Page';
import DropArea from '../components/DropArea';
import PreviewText from '../components/PreviewText';

const LoadPage = observer(() => (
  <Page>
    <DropArea />
    <PreviewText />
  </Page>
));

export default LoadPage;
