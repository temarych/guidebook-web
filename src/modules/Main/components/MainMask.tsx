import { ReactNode } from 'react';
import { styled }    from '@mui/material';

export interface MainMaskProps {
  children?: ReactNode;
}

export const MainMask = ({
  children
}: MainMaskProps) => (
  <Wrapper>
    <Container>
      {children}
    </Container>
  </Wrapper>
);

const Wrapper = styled('div')`
  position      : fixed;
  left          : ${({ theme }) => theme.spacing(2)};
  right         : ${({ theme }) => theme.spacing(2)};
  top           : ${({ theme }) => theme.spacing(2)};
  bottom        : ${({ theme }) => `calc(var(--navbar-height) + ${theme.spacing(2)})`};
  display       : flex;
  flex-direction: column;
  align-items   : center;
  pointer-events: none;
`;

const Container = styled('div')`
  position : relative;
  width    : 100%;
  max-width: var(--main-max-width);
  height   : 100%;
  display  : flex;

  * {
    pointer-events: auto;
  }
`;
