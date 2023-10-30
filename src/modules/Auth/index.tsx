import { Outlet }              from 'react-router-dom';
import { Card, Stack, styled } from '@mui/material';

export const Auth = () => (
  <Wrapper>
    <Container variant="outlined">
      <Outlet />
    </Container>
  </Wrapper>
);

const Wrapper = styled(Stack)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(2)};
    height : 100vh;
  }
`;

const Container = styled(Card)`
  width   : 100%;
  overflow: visible;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 25rem;
    margin   : auto;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    border-radius: 0;
    border       : 0;
  }
`;
