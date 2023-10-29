import { ReactNode }         from 'react';
import { Stack, Typography } from '@mui/material';

export interface AuthContainerProps {
  title    : string;
  children?: ReactNode;
}

export const AuthContainer = ({
  title,
  children
}: AuthContainerProps) => (
  <Stack spacing={6}>
    <Typography variant="h4">
      {title}
    </Typography>
    <Stack>
      {children}
    </Stack>
  </Stack>
);
