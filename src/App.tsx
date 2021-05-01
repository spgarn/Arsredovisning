import './App.css';
import { StoreProvider } from './hooks/useStore';
// import { PDFViewer } from '@react-pdf/renderer';
// import MyDocument from './pages/pdf';
import LoadPage from './pages/LoadPage';
// import LoadPage from './pages/LoadPage';
// import { infoStore } from './functions/infoStore';
function App() {
  return (
    <StoreProvider>
      {/* infoStore.isReady ? (
   <PDFViewer width="100%" height="1000px">
     <MyDocument />
   </PDFViewer>
   ) */}
      <LoadPage />
    </StoreProvider>
  );
}

export default App;
