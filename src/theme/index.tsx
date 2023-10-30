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
        sizeLarge: {
          paddingTop   : '0.6rem',
          paddingBottom: '0.6rem',
        },
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
    },
    MuiDialog: {
      styleOverrides: {
        paperFullScreen: {
          margin: 0
        },
        paper: {
          margin: '1rem',
          width : '100%'
        }
      }
    }
  }
});
