import './App.css';
import React from 'react';
import { MyDocument } from './pages/pdf'
import { PDFViewer } from '@react-pdf/renderer';
import LoadPage from './pages/LoadPage'
import { infoStore } from './functions/infoStore';

function App() {


  return (
    infoStore.isReady ? (
      <PDFViewer width={'100%'} height={'1000px'}>
        <MyDocument />
      </PDFViewer>)
      :
      <LoadPage />
  );
}

export default App;
