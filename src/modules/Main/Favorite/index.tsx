import { ChangeEvent, useMemo, useState } from 'react';
import { debounce }                       from 'lodash';
import { useNavigate }                    from 'react-router-dom';
import { Paper, Stack, styled }           from '@mui/material';
import { useSearchFavoriteGuidesQuery }   from '@store/api/searchApi';
import { Loader }                         from '@components/Loader';
import { MainContainer }                  from '../components/MainContainer';
import { GuideList }                      from '../components/GuideList';
import { SearchField }                    from '../components/SearchField';
import { ListPlaceholder }                from '../components/ListPlaceholder';

export const Favorite = () => {
  const navigate          = useNavigate();
  const [query, setQuery] = useState('');
  const { data: guides }  = useSearchFavoriteGuidesQuery(query);

  const handleQueryChange = useMemo(
    () => debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, 200),
    [],
  );

  if (!guides) return <Loader />;

  return (
    <MainContainer title="Favorite">
      <Stack spacing={2}>
        <SearchField onChange={handleQueryChange} />
        
        <ListWrapper variant="outlined">
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
              caption = "No favorite guides"
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
