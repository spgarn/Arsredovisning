import './App.css';
import { StoreProvider } from './hooks/useStore';
import Navigation from './navigation/navigation';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
}

export default App;
