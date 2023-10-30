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
    <Stack
      width  = "100%"
      height = {['unset', '100vh']}
      p      = {[0, 3]}
    >
      <Card
        variant   = "outlined"
        sx        = {{
          maxWidth    : ['unset', '25rem'],
          margin      : [0, 'auto'],
          borderRadius: isMobile ? 0 : undefined,
          border      : isMobile ? 0 : undefined,
          width       : '100%',
          overflow    : 'visible'
        }}
      >
        <Outlet />
      </Card>
    </Stack>
  );
};
