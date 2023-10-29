import { PaletteMode, createTheme } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
  },
  shape: {
    borderRadius: 10
  }
});
