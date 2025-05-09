import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '../context/ThemeContext';
import { useMemo } from 'react';
import Header from '../components/Header';

export default function MyApp({ Component, pageProps }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: pageProps.darkMode ? 'dark' : 'light',
        },
      }),
    [pageProps.darkMode]
  );

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}