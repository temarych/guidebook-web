import { CircularProgress, Paper, styled } from '@mui/material';

export const Loader = () => (
  <Wrapper elevation={0}>
    <CircularProgress />
  </Wrapper>
);

const Wrapper = styled(Paper)`
  position       : fixed;
  top            : 0;
  left           : 0;
  right          : 0;
  bottom         : 0;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
`;
