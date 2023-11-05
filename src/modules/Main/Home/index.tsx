import {
  ChangeEvent,
  useMemo,
  useState,
}                            from 'react';
import { useNavigate }       from 'react-router-dom';
import {
  Paper,
  Stack, 
  debounce,
  styled,
}                            from '@mui/material';
import { useGetGuidesQuery } from '@store/api/guideApi';
import { Loader }            from '@components/Loader';
import { MainContainer }     from '../components/MainContainer';
import { GuideList }         from '../components/GuideList';
import { SearchField }       from '../components/SearchField';
import { ListPlaceholder }   from '../components/ListPlaceholder';

export const Home = () => {
  const navigate          = useNavigate();
  const [query, setQuery] = useState<string>('');
  const { data: guides }  = useGetGuidesQuery(query);

  const handleQueryChange = useMemo(
    () => debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, 200),
    [],
  );

  if (!guides) return <Loader />;

  return (
    <MainContainer title="Home">
      <Stack spacing={2}>
        <SearchField onChange={handleQueryChange} />
      
        <ListWrapper variant="outlined">
          {(guides.length > 0) ? (
            <GuideList
              guides  = {guides}
              onClick = {id => navigate(`/guide/${id}`)}
            />
          ) : (
            <ListPlaceholder
              emoji   = "🤷‍♂️"
              caption = "Nothing found"
            />
          )}
        </ListWrapper>
      </Stack>
    </MainContainer>
  );
};

const ListWrapper = styled(Paper)`
  overflow: hidden;
`;
