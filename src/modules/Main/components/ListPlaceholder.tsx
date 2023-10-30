import { Stack, Typography } from '@mui/material';

export interface ListPlaceholderProps {
  emoji  : string;
  caption: string;
}

export const ListPlaceholder = ({
  emoji,
  caption
}: ListPlaceholderProps) => (
  <Stack py={4} px={2} spacing={1}>
    <Typography textAlign="center" variant="h2">
      {emoji}
    </Typography>
    <Typography textAlign="center" variant="body2">
      {caption}
    </Typography>
  </Stack>
);
