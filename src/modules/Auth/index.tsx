import { Outlet } from 'react-router-dom';
import {
  Card,
  Stack,
  useMediaQuery,
  useTheme,
}                 from '@mui/material';

export const Auth = () => {
  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack height="100vh" width="100%" p={[0, 3]}>
      <Card
        elevation = {isMobile ? 0: 1}
        sx        = {{
          maxWidth: ['unset', '25rem'],
          margin  : [0, 'auto'],
          width   : '100%',
          overflow: 'visible'
        }}
      >
        <Outlet />
      </Card>
    </Stack>
  );
};
