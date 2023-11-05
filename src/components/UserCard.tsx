import { Avatar, Stack, Typography } from '@mui/material';

export interface UserCardProps {
  username: string;
  email   : string;
  avatar? : string | null;
}

export const UserCard = ({
  username,
  email,
  avatar
}: UserCardProps) => (
  <Stack direction="row" alignItems="center" p={2} spacing={2}>
    <Avatar
      src = {avatar ?? undefined}
      sx  = {{ width : '3rem', height: '3rem' }}
    />
    <Stack>
      <Typography variant="body1" fontWeight="bold">
        {username}
      </Typography>
      <Typography variant="body2">
        {email}
      </Typography>
    </Stack>
  </Stack>
);
