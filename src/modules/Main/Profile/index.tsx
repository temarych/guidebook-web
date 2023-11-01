import { useState }                      from 'react';
import { useNavigate }                   from 'react-router-dom';
import { Card, Stack, Tab }                     from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useSelf }                       from '@hooks/useSelf';
import { IUser }                         from '@typings/user';
import { useSearchGuidesQuery }          from '@store/api/searchApi';
import { Loader }                        from '@components/Loader';
import { UserInfo }                      from '@components/UserInfo';
import { GuideList }                     from '../components/GuideList';
import { MainContainer }                 from '../components/MainContainer';
import { SearchField } from '../components/SearchField';

export const Profile = () => {
  const navigate         = useNavigate();
  const { self }         = useSelf();
  const user             = self as IUser;
  const { data: guides } = useSearchGuidesQuery(''); 
  const [tab, setTab]    = useState<'guides' | 'guidebooks'>('guides');

  if (!guides) return <Loader />;

  return (
    <MainContainer spacing={4}>
      <Card variant="outlined" sx={{ py: 6 }}>
        <UserInfo {...user} />
      </Card>

      <Stack spacing={2}>
        <SearchField />

        <Card variant="outlined">
          <TabContext value={tab}>
            <TabList
              onChange = {(_, value) => setTab(value)}
              sx       = {{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab value="guides" label="Guides" />
              <Tab value="guidebooks" label="Guidebooks" />
            </TabList>

            <TabPanel value="guides" sx={{ p: 0 }}>
              <GuideList
                guides  = {guides}
                onClick = {id => navigate(`/guide/${id}`)}
              />
            </TabPanel>
            <TabPanel value="guidebooks" sx={{ p: 0 }}>
              Guidebooks
            </TabPanel>
          </TabContext>
        </Card>
      </Stack>
    </MainContainer>
  );
};
