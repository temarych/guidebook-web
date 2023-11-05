import { Avatar, Stack, Typography, styled } from '@mui/material';
import { Podium }                            from './Podium';

export interface UserPreviewProps {
  username       : string;
  email          : string;
  avatar?        : string | null;
  guidesCount    : number;
  guidebooksCount: number;
  likesCount     : number;
}

export const UserPreview = ({
  username,
  email,
  avatar,
  guidesCount,
  guidebooksCount,
  likesCount
}: UserPreviewProps) => (
  <Stack spacing={4} px={2} py={4}>
    <Stack alignItems="center" spacing={2}>
      <Avatar
        src = {avatar ?? undefined}
        sx  = {{ width: '8rem', height: '8rem' }}
      />
      <Stack alignItems="center">
        <Typography variant="h6">
          {username}
        </Typography>
        <Typography variant="body2">
          {email}
        </Typography>
      </Stack>
    </Stack>
    
    <Grid>
      <Podium
        value   = {`${guidesCount}`}
        caption = "Guides"
      />
      <Podium
        value   = {`${guidebooksCount}`}
        caption = "Guidebooks"
      />
      <Podium
        value   = {`${likesCount}`}
        caption = "Likes"
      />
    </Grid>
  </Stack>
);

const Grid = styled('div')`
  display              : grid;
  grid-template-columns: repeat(3, 1fr);
  gap                  : ${({ theme }) => theme.spacing(2)};
`;
