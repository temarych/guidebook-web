import { Outlet } from 'react-router-dom';
import { Stack }  from '@mui/material';
import { Logo }   from '@components/Logo';

export const Auth = () => (
  <Stack px={2} py={4} spacing={6}>
    <Stack alignItems="center">
      <Logo />
    </Stack>
    <Outlet />
  </Stack>
);
