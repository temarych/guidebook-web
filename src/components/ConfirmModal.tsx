import { Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogProps,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled
}                from '@mui/material';
import { grey }  from '@mui/material/colors';

export interface ConfirmModalProps extends Omit<DialogProps, 'onClose' | 'children'> {
  title     : string;
  message   : string;
  onCancel? : () => void;
  onConfirm?: () => void;
}

export const ConfirmModal = ({
  title,
  message,
  onCancel,
  onConfirm,
  ...props
}: ConfirmModalProps) => (
  <Dialog {...props} onClose={onCancel}>
    <Header variant="outlined">
      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} py={1}>
        <Typography variant="h6">
          {title}
        </Typography>
        <IconButton onClick={onCancel}>
          <Close />
        </IconButton>
      </Stack>
    </Header>

    <Stack px={2} pb={2} pt={4} spacing={4}>
      <Typography variant="body1">
        {message}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size    = "large"
          variant = "outlined"
          sx      = {{ color: grey[500] }}
          color   = "inherit"
          onClick = {onCancel}
        >
          Cancel
        </Button>
        <Button
          fullWidth
          size    = "large"
          variant = "contained"
          color   = "error"
          onClick = {onConfirm}
        >
          Confirm
        </Button>
      </Stack>
    </Stack>
  </Dialog>
);

const Header = styled(Paper)`
  border-left     : 0;
  border-right    : 0;
  border-top      : 0;
  border-radius   : 0;
  background-color: transparent;
`;
