import { ReactNode }                 from 'react';
import { Stack, Typography, styled } from '@mui/material';

export interface MainContainerProps {
  title?   : string;
  spacing? : number;
  children?: ReactNode;
}

export const MainContainer = ({
  title,
  spacing,
  children
}: MainContainerProps) => (
  <Wrapper>
    <Container spacing={4}>
      {title && (
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
      )}
      <Stack spacing={spacing}>
        {children}
      </Stack>
    </Container>
  </Wrapper>
);

const Wrapper = styled(Stack)`
  align-items   : center;
  padding-left  : ${({ theme }) => theme.spacing(2)};
  padding-right : ${({ theme }) => theme.spacing(2)};
  padding-top   : ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Container = styled(Stack)`
  width    : 100%;
  max-width: var(--main-max-width);
`;
