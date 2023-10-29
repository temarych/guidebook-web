import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  List,
  Paper,
  Stack,
  Switch,
  Typography,
  styled,
}                              from '@mui/material';
import {
  Lightbulb,
  Notifications,
  Security,
}                              from '@mui/icons-material';
import { useSelf }             from '@hooks/useSelf';
import { useAccessToken }      from '@hooks/useAccessToken';
import { useDisclosure }       from '@hooks/useDisclosure';
import { useDeleteMeMutation } from '@store/api/authApi';
import { IUser }               from '@typings/user';
import { ModeSwitch }          from '@components/ModeSwitch';
import { ConfirmModal }        from '@components/ConfirmModal';
import { MainContainer }       from '../components/MainContainer';
import { SettingItem }         from './SettingItem';

export const Settings = () => {
  const { self }                                                 = useSelf();
  const { setAccessToken }                                       = useAccessToken();
  const user                                                     = self as IUser;
  const [deleteMe]                                               = useDeleteMeMutation();
  const [isConfirmSignOutModalOpen, confirmSignOutModalHandlers] = useDisclosure();
  const [isConfirmDeleteModalOpen, confirmDeleteModalHandlers]   = useDisclosure();

  return (
    <MainContainer title="Settings">
      <Stack spacing={4}>
        <SectionWrapper variant="outlined">
          <Stack direction="row" alignItems="center" p={2} spacing={2}>
            <Avatar />
            <Stack>
              <Typography variant="body1" fontWeight="bold">
                {user.username}
              </Typography>
              <Typography variant="body2">
                {user.email}
              </Typography>
            </Stack>
          </Stack>
        </SectionWrapper>

        <SectionWrapper variant="outlined">
          <List disablePadding>
            <SettingItem
              name           = "Color mode"
              startDecorator = {<Lightbulb />}
              endDecorator   = {<ModeSwitch />}
            />
            <Divider />
            <SettingItem
              name           = "Notifications"
              startDecorator = {<Notifications />}
              endDecorator   = {<Switch />}
            />
            <Divider />
            <SettingItem
              name           = "Safe search"
              startDecorator = {<Security />}
              endDecorator   = {<Switch />}
            />
          </List>
        </SectionWrapper>

        <ButtonGroup orientation="vertical">
          <Button
            variant = "outlined"
            size    = "large"
            color   = "error"
            onClick = {confirmSignOutModalHandlers.open}
          >
            Sign out
          </Button>

          <Button
            size    = "large"
            color   = "error"
            onClick = {confirmDeleteModalHandlers.open}
          >
            Delete account
          </Button>
        </ButtonGroup>
      </Stack>

      <ConfirmModal
        fullWidth
        maxWidth  = "xs"
        open      = {isConfirmSignOutModalOpen}
        title     = "Sign out"
        message   = "Are you sure you want to sign out?"
        onCancel  = {confirmSignOutModalHandlers.close}
        onConfirm = {() => setAccessToken(null)}
      />

      <ConfirmModal
        fullWidth
        maxWidth  = "xs"
        open      = {isConfirmDeleteModalOpen}
        title     = "Delete account"
        message   = "Are you sure you want to delete your account?"
        onCancel  = {confirmDeleteModalHandlers.close}
        onConfirm = {deleteMe}
      />
    </MainContainer>
  );
};

const SectionWrapper = styled(Paper)`
  overflow: hidden;
`;
