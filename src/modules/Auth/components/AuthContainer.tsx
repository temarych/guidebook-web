import { ReactNode }         from 'react';
import { Stack, Typography } from '@mui/material';
import { Logo }              from '@components/Logo';

export interface AuthContainerProps {
  title    : string;
  children?: ReactNode;
}

export const AuthContainer = ({
  title,
  children
}: AuthContainerProps) => (
  <Stack px={3} py={6} spacing={6}>
    <Stack alignItems="center">
      <Logo />
    </Stack>
    <Typography variant="h4" fontSize="1.8rem">
      {title}
    </Typography>
    <Stack>
      {children}
    </Stack>
  </Stack>
);
