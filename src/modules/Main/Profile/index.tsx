import { ChangeEvent, useMemo, useState }       from 'react';
import { debounce }                             from 'lodash';
import { useNavigate }                          from 'react-router-dom';
import { Card, Stack, Tab }                     from '@mui/material';
import { TabContext, TabList, TabPanel }        from '@mui/lab';
import { IUser }                                from '@typings/user';
import { useGetMyGuidesQuery, useGetSelfQuery } from '@store/api/selfApi';
import { Loader }                               from '@components/Loader';
import { UserInfo }                             from '@components/UserInfo';
import { GuideList }                            from '../components/GuideList';
import { MainContainer }                        from '../components/MainContainer';
import { SearchField }                          from '../components/SearchField';
import { ListPlaceholder }                      from '../components/ListPlaceholder';

export const Profile = () => {
  const navigate          = useNavigate();
  const [query, setQuery] = useState('');
  const { data: self }    = useGetSelfQuery();
  const { data: guides }  = useGetMyGuidesQuery(query); 
  const [tab, setTab]     = useState<'guides' | 'guidebooks'>('guides');
  const user              = self as IUser;

  const handleQueryChange = useMemo(
    () => debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, 200),
    [],
  );

  if (!guides) return <Loader />;

  return (
    <MainContainer title="Profile" spacing={4}>
      <Card variant="outlined" sx={{ py: 6 }}>
        <UserInfo {...user} />
      </Card>

      <Stack spacing={2}>
        <SearchField onChange={handleQueryChange} />

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
              {guides.length > 0 ? (
                <GuideList
                  guides  = {guides}
                  onClick = {id => navigate(`/guide/${id}`)}
                />
              ) : query ? (
                <ListPlaceholder
                  emoji   = "🤷‍♂️"
                  caption = "Nothing found"
                />
              ) : (
                <ListPlaceholder
                  emoji   = "🔍"
                  caption = "No guides"
                />
              )}
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
