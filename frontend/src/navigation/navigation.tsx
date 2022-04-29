import { Routes, Route, BrowserRouter } from 'react-router-dom';
import useStore from '../hooks/useStore';
import BalanceSheetPage from '../pages/BalanceSheetPage/BalanceSheetPage';
import CompanyInfoPage from '../pages/CompanyInfoPage/CompanyInfoPage';
import FiscalYearPage from '../pages/FiscalYearPage/FiscalYearPage';
import LoadSie from '../pages/LoadSiePage/LoadSiePage';
import NotesPage from '../pages/NotesPage/NotesPage';
import ResultDispositionPage from '../pages/ResultDispositionPage/ResultDispositionPage';
import ResultSheetPage from '../pages/ResultSheetPage/ResultSheetPage';
import SignPage from '../pages/SignPage/SignPage';
import YearStoryPage from '../pages/YearStoryPage/YearStoryPage';

const Navigation = () => {
  const { companyStore } = useStore();
  const companyInfo = JSON.parse(localStorage.getItem('companyInfo'));
  if (companyInfo) companyStore.hydrate(companyInfo);

  return (
    <BrowserRouter>
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
