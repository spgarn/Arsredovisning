import './App.css';
import { StoreProvider } from './hooks/useStore';
import LoadPage from './pages/LoadPage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <StoreProvider>
      <LoadPage />
    </StoreProvider>
  );
}

export default App;
