import { forwardRef } from 'react';
import {
  InputAdornment,
  TextField,
  TextFieldProps,
}                     from '@mui/material';
import { Search }     from '@mui/icons-material';

export type SearchFieldProps = Omit<TextFieldProps, 'autoComplete' | 'placeholder' | 'InputProps'>;

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => (
  <TextField
    {...props}
    ref          = {ref}
    autoComplete = "off"
    placeholder  = "Search"
    InputProps   = {{
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      )
    }}
  />
));
