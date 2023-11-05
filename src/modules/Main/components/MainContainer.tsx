import { ReactNode }                 from 'react';
import { Stack, Typography, styled } from '@mui/material';

export interface MainContainerProps {
  title?    : string;
  spacing?  : number;
  rightSlot?: ReactNode;
  children? : ReactNode;
}

export const MainContainer = ({
  title,
  spacing,
  rightSlot,
  children
}: MainContainerProps) => (
  <Wrapper>
    <Container spacing={4}>
      {(title || rightSlot) && (
        <Stack direction="row" alignItems="center" position="relative">
          {title && (
            <Typography variant="h5" fontWeight="bold">
              {title}
            </Typography>
          )}
          {rightSlot && (
            <Stack position="absolute" right={0}>
              {rightSlot}
            </Stack>
          )}
        </Stack>
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
