import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',  // Ciano
    },
    background: {
      default: '#000000',  // Preto
      paper: '#1c1c1c',
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
