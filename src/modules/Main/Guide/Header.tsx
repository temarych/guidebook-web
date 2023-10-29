import {
  IconButton,
  Paper,
  Stack,
  styled,
}                from '@mui/material';
import { Close } from '@mui/icons-material';

export interface HeaderProps {
  onClose?: () => void;
}

export const Header = ({
  onClose
}: HeaderProps) => (
  <>
    <Placeholder />
    <Wrapper variant="outlined">
      <Stack
        direction      = "row"
        alignItems     = "center"
        justifyContent = "flex-end"
        height         = "100%"
        width          = "100%"
        px             = {2}
      >
        <IconButton size="large" onClick={onClose}>
          <Close />
        </IconButton>
      </Stack>
    </Wrapper>
  </>
);

const Placeholder = styled('div')`
  height: 4rem;
`;

const Wrapper = styled(Paper)`
  position     : fixed;
  border-left  : 0;
  border-right : 0;
  border-top   : 0;
  border-radius: 0;
  left         : 0;
  right        : 0;
  top          : 0;
  height       : 4rem;
`;
