import { observer } from 'mobx-react-lite';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import Page from '../components/Page';
import DropArea from '../components/DropArea';
import PreviewText from '../components/PreviewText';
import Pdf from './PDF/pdf';
import useStore from '../hooks/useStore';

const LoadPage = observer(() => {
  const { companyStore } = useStore();
  const [generatePdf, setGeneratePdf] = useState(false);

  if (generatePdf) {
    return (
      <div style={{ height: '100vh' }}>
        <PDFViewer width="100%" height="100%">
          <Pdf companyStore={companyStore} />
        </PDFViewer>
      </div>
    );
  }

  return (
    <Page>
      <DropArea />
      <PreviewText />
      <button type="button" onClick={() => setGeneratePdf(true)}>Generate PDF</button>
    </Page>
  );
});

export default LoadPage;
