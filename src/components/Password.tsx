import { forwardRef, useState }      from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
}                                    from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export type PasswordProps = Omit<TextFieldProps, 'type'>;

export const Password = forwardRef<HTMLInputElement, PasswordProps>((props, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <TextField
      {...props}
      ref        = {ref}
      type       = {isHidden ? 'password': 'text'}
      InputProps = {{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setIsHidden(!isHidden)}>
              {isHidden ? (
                <Visibility />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps
      }}
    />
  );
});
