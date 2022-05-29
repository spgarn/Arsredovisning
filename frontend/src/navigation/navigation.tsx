import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import TimeLine from '../components/TimeLine';
import useStore from '../hooks/useStore';
import CompanyInfoPage from '../pages/CompanyInfoPage/CompanyInfoPage';
import FiscalYearPage from '../pages/FiscalYearPage/FiscalYearPage';
import LoadSie from '../pages/LoadSiePage/LoadSiePage';
import NotesPage from '../pages/NotesPage/NotesPage';
import Pdf from '../pages/PDF/pdf';
import ResultDispositionPage from '../pages/ResultDispositionPage/ResultDispositionPage';
import ResultSheetPage from '../pages/ResultSheetPage/ResultSheetPage';
import SignPage from '../pages/SignPage/SignPage';
import YearStoryPage from '../pages/YearStoryPage/YearStoryPage';
import BalanceSheetEquityPage from '../pages/BalanceSheetPage/BalanceSheetEquityPage';
import BalanceSheetAssetsPage from '../pages/BalanceSheetPage/BalanceSheetAssetsPage';

const Navigation = () => {
  const { companyStore } = useStore();
  const [showPdf, setShowPdf] = useState(false);

  if (showPdf) {
    return (
      <div style={{ height: '100vh' }}>
        <Box position="absolute" top={12} right={160}>
          <Button
            onClick={() => setShowPdf(!showPdf)}
            disabled={!companyStore.isReady}
            variant="contained"
          >
            Avbryt
          </Button>
        </Box>
        <PDFViewer width="100%" height="100%">
          <Pdf companyStore={companyStore} />
        </PDFViewer>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Button onClick={() => setShowPdf(!showPdf)} variant="contained">
            Förhandsgranska
          </Button>
        </Grid>
      </Grid>
      <TimeLine />
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
        <Route
          path="/balance-sheet-assets"
          element={<BalanceSheetAssetsPage />}
        />
        <Route
          path="/balance-sheet-equity"
          element={<BalanceSheetEquityPage />}
        />
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
