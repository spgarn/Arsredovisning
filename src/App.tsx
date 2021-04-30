import './App.css';
import React from 'react';
import { MyDocument } from './pages/pdf'
import { PDFViewer } from '@react-pdf/renderer';
import LoadPage from './pages/LoadPage'

function App() {

  const [viewPdf, setViewPdf] = React.useState(false)

  return (
    !viewPdf ? (
      <PDFViewer width={'100%'} height={'1000px'}>
        <MyDocument />
      </PDFViewer>)
      :
      <LoadPage />
  );
}

export default App;
