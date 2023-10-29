import { Paper, styled } from '@mui/material';
import { Logo }          from '@components/Logo';

export const Header = () => (
  <>
    <Placeholder />
    <Wrapper variant="outlined">
      <Container>
        <Logo />
      </Container>
    </Wrapper>
  </>
);

const Placeholder = styled('div')`
  height: ${({ theme }) => theme.spacing(8)};
`;

const Wrapper = styled(Paper)`
  position      : fixed;
  top           : 0;
  left          : 0;
  right         : 0;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  height        : ${({ theme }) => theme.spacing(8)};
  padding-left  : ${({ theme }) => theme.spacing(2)};
  padding-right : ${({ theme }) => theme.spacing(2)};
  border-top    : 0;
  border-left   : 0;
  border-right  : 0;
  border-radius : 0;
  z-index       : 1000;
`;

const Container = styled('div')`
  display        : flex;
  flex-direction : row;
  align-items    : center;
  justify-content: space-between;
  max-width      : 80rem;
  width          : 100%;
  height         : 100%;
`;
