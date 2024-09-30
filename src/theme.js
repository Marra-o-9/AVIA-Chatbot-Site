import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',  // Ciano
    },
    background: {
      default: '#121212',  // Preto
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#00bcd4',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
