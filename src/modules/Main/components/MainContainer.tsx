import { ReactNode }         from 'react';
import { Stack, Typography } from '@mui/material';

export interface MainContainerProps {
  title?   : string;
  children?: ReactNode;
}

export const MainContainer = ({
  title,
  children
}: MainContainerProps) => (
  <Stack px={2} py={4} spacing={4}>
    {title && (
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
    )}
    <Stack>
      {children}
    </Stack>
  </Stack>
);
