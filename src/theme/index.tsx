import { PaletteMode, createTheme } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
  },
  shape: {
    borderRadius: 10
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none'
          }
        }
      }
    }
  }
});
