import { Avatar, Stack, Typography } from '@mui/material';

export interface UserTagProps {
  avatar? : string | null;
  username: string;
}

export const UserTag = ({
  avatar,
  username
}: UserTagProps) => (
  <Stack
    direction  = "row"
    alignItems = "center"
    spacing    = {1}
  >
    <Avatar
      sx  = {{ width: '1.25rem', height: '1.25rem' }}
      src = {avatar ?? undefined}
    />
    <Typography variant="body2">
      {username}
    </Typography>
  </Stack>
);
