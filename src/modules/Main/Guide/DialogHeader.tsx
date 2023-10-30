import { IconButton, Paper, styled, } from '@mui/material';
import { Close }                      from '@mui/icons-material';

export interface DialogHeader {
  onClose?: () => void;
}

export const DialogHeader = ({
  onClose
}: DialogHeader) => (
  <>
    <Placeholder />
    <Wrapper variant="outlined">
      <Container>
        <IconButton size="large" onClick={onClose}>
          <Close />
        </IconButton>
      </Container>
    </Wrapper>
  </>
);

const Placeholder = styled('div')`
  height: 4rem;
`;

const Wrapper = styled(Paper)`
  position      : fixed;
  border-left   : 0;
  border-right  : 0;
  border-top    : 0;
  border-radius : 0;
  left          : 0;
  right         : 0;
  top           : 0;
  height        : 4rem;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  padding-left  : ${({ theme }) => theme.spacing(2)};
  padding-right : ${({ theme }) => theme.spacing(2)};
`;

const Container = styled('div')`
  width          : 100%;
  height         : 100%;
  max-width      : var(--main-max-width);
  display        : flex;
  flex-direction : row;
  align-items    : center;
  justify-content: flex-end;
`;
