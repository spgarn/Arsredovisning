import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import useStore from '../hooks/useStore';
import BalanceSheetPage from '../pages/BalanceSheetPage/BalanceSheetPage';
import CompanyInfoPage from '../pages/CompanyInfoPage/CompanyInfoPage';
import FiscalYearPage from '../pages/FiscalYearPage/FiscalYearPage';
import LoadSie from '../pages/LoadSiePage/LoadSiePage';
import NotesPage from '../pages/NotesPage/NotesPage';
import Pdf from '../pages/pdf';
import ResultDispositionPage from '../pages/ResultDispositionPage/ResultDispositionPage';
import ResultSheetPage from '../pages/ResultSheetPage/ResultSheetPage';
import SignPage from '../pages/SignPage/SignPage';
import YearStoryPage from '../pages/YearStoryPage/YearStoryPage';

const Navigation = () => {
  const { companyStore } = useStore();
  const companyInfo = JSON.parse(localStorage.getItem('companyInfo'));
  if (companyInfo) companyStore.hydrate(companyInfo);

  const [isGeneratePdf, setIsGeneratePdf] = useState(false);

  if (isGeneratePdf) {
    return (
      <div style={{ height: '100vh' }}>
        <Grid
          container
          justifyContent="flex-end"
          position="absolute"
          top={70}
          right={25}
        >
          <Button onClick={() => setIsGeneratePdf(!isGeneratePdf)} disabled={!companyStore.isReady} variant="contained">{isGeneratePdf ? 'Avbryt' : 'Förhandsgranska'}</Button>
        </Grid>
        <PDFViewer width="100%" height="100%">
          <Pdf companyStore={companyStore} />
        </PDFViewer>
      </div>
    );
  } return (
    <BrowserRouter>
      <Grid
        container
        justifyContent="flex-end"
      >
        <Button onClick={() => setIsGeneratePdf(!isGeneratePdf)} disabled={!companyStore.isReady} variant="contained">Förhandsgranska</Button>
      </Grid>
      <Routes>
        {/* Siefil */}
        <Route path="/Arsredovisning" element={<LoadSie />} />
        {/* Välj räkenskapsår */}
        <Route path="/fiscal-year" element={<FiscalYearPage />} />
        {/* Företagsuppgifter */}
        <Route path="/company-info" element={<CompanyInfoPage />} />
        {/* Resultaträkning */}
        <Route path="/result-sheet" element={<ResultSheetPage />} />
        {/* Balansräkning */}
        <Route path="/balance-sheet" element={<BalanceSheetPage />} />
        {/* Resultatdisposition */}
        <Route path="/result-disposition" element={<ResultDispositionPage />} />
        {/* Noter */}
        <Route path="/notes" element={<NotesPage />} />
        {/* Förvaltningsberättelse */}
        <Route path="/year-story" element={<YearStoryPage />} />
        {/* Befattningshavare */}
        <Route path="/sign" element={<SignPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
