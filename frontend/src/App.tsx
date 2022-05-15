import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import './App.css';
import { StoreProvider } from './hooks/useStore';
import Navigation from './navigation/navigation';

const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      main: '#6f12cd',
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    fontSize: 11,
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 5,
      },

    },

    MuiButton: {
      styleOverrides: {
        contained: {
          minWidth: '64px',
          minHeight: '36px',
          padding: '8px 16px',
          lineHeight: 0.5,
        },
      },
    },
  },
});

function App():JSX.Element {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#dae9cc5c' },
          }}
        />
        <Navigation />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
