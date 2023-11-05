import {
  Button,
  ButtonGroup,
  Divider,
  List,
  Paper,
  Switch,
  styled,
}                             from '@mui/material';
import {
  Lightbulb,
  Notifications,
  Security,
}                             from '@mui/icons-material';
import { useDisclosure }      from '@hooks/useDisclosure';
import {
  useGetSelfQuery,
  useDeleteSelfMutation
}                             from '@store/api/selfApi';
import { useSignOutMutation } from '@store/api/authApi';
import { IUser }              from '@typings/user';
import { UserCard }           from '@components/UserCard';
import { ModeSwitch }         from '@components/ModeSwitch';
import { ConfirmModal }       from '@components/ConfirmModal';
import { MainContainer }      from '../components/MainContainer';
import { SettingItem }        from './SettingItem';

export const Settings = () => {
  const { data: self }                                           = useGetSelfQuery();
  const user                                                     = self as IUser;
  const [deleteSelf]                                             = useDeleteSelfMutation();
  const [signOut]                                                = useSignOutMutation();
  const [isConfirmSignOutModalOpen, confirmSignOutModalHandlers] = useDisclosure();
  const [isConfirmDeleteModalOpen, confirmDeleteModalHandlers]   = useDisclosure();

  return (
    <>
      <MainContainer title="Settings" spacing={4}>
        <SectionWrapper variant="outlined">
          <UserCard {...user} />
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
      </MainContainer>

      <ConfirmModal
        open      = {isConfirmSignOutModalOpen}
        title     = "Sign out"
        message   = "Are you sure you want to sign out?"
        onCancel  = {confirmSignOutModalHandlers.close}
        onConfirm = {() => signOut()}
      />

      <ConfirmModal
        open      = {isConfirmDeleteModalOpen}
        title     = "Delete account"
        message   = "Are you sure you want to delete your account?"
        onCancel  = {confirmDeleteModalHandlers.close}
        onConfirm = {deleteSelf}
      />
    </>
  );
};

const SectionWrapper = styled(Paper)`
  overflow: hidden;
`;
