import { Stack, Typography } from '@mui/material';

export interface PodiumProps {
  value  : string;
  caption: string;
}

export const Podium = ({
  value,
  caption
}: PodiumProps) => (
  <Stack alignItems="center" justifyContent="center">
    <Typography variant="h6">
      {value}
    </Typography>
    <Typography variant="body2">
      {caption}
    </Typography>
  </Stack>
);
