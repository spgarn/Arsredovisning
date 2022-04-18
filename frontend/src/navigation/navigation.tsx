import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BalanceSheetPage from '../pages/BalanceSheetPage/BalanceSheetPage';
import CheckCompanyInfo from '../pages/CheckCompanyInfoPage/CheckCompanyInfoPage';
import CompanyInfoPage from '../pages/CompanyInfoPage/CompanyInfoPage';
import FiscalYearPage from '../pages/FiscalYearPage/FiscalYearPage';
import LoadSie from '../pages/LoadSiePage/LoadSiePage';
import NotesPage from '../pages/NotesPage/NotesPage';
import ResultDispositionPage from '../pages/ResultDispositionPage/ResultDispositionPage';
import ResultSheetPage from '../pages/ResultSheetPage/ResultSheetPage';
import SignPage from '../pages/SignPage/SignPage';
import YearStoryPage from '../pages/YearStoryPage/YearStoryPage';

const Navigation = () => (
  <BrowserRouter>
    <Routes>
      {/* Siefil */}
      <Route path="/" element={<LoadSie />} />
      {/* Kontrollera uppgifter */}
      <Route path="/check-info" element={<CheckCompanyInfo />} />
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

export default Navigation;
