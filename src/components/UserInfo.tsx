import { Avatar, Stack, Typography } from '@mui/material';

export interface UserInfoProps {
  username: string;
  email   : string;
  avatar? : string | null;
}

export const UserInfo = ({
  username,
  email,
  avatar
}: UserInfoProps) => (
  <Stack spacing={2}>
    <Avatar
      src = {avatar ?? undefined}
      sx  = {{
        width    : '8rem',
        height   : '8rem',
        alignSelf: 'center'
      }}
    />

    <Stack spacing={1}>
      <Typography variant="h6" textAlign="center">
        {username}
      </Typography>
      <Typography variant="body2" textAlign="center">
        {email}
      </Typography>
    </Stack>
  </Stack>
);
