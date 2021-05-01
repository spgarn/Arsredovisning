import './App.css';
import { StoreProvider } from './hooks/useStore';
import LoadPage from './pages/LoadPage';

function App() {
  return (
    <StoreProvider>
      <LoadPage />
    </StoreProvider>
  );
}

export default App;
