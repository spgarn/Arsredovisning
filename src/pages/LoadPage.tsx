import { observer } from 'mobx-react-lite';
import { PDFViewer } from '@react-pdf/renderer';
import Page from '../components/Page';
import DropArea from '../components/DropArea';
import PreviewText from '../components/PreviewText';
import Pdf from './pdf';
import useStore from '../hooks/useStore';

const LoadPage = observer(() => {
  const { infoStore } = useStore();
  return (
    <>
      {infoStore.isReady ? (
        <PDFViewer width="100%" height="1000px">
          <Pdf infoStore={infoStore} />
        </PDFViewer>

      )
        : (
          <Page>
            <DropArea />
            <PreviewText />
          </Page>
        )}
    </>
  );
});

export default LoadPage;
