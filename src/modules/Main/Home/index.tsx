import {
  ChangeEvent,
  useMemo,
  useState,
}                               from 'react';
import { useNavigate }          from 'react-router-dom';
import {
  InputAdornment,
  Paper,
  Stack, 
  TextField,
  Typography,
  debounce,
  styled,
}                               from '@mui/material';
import { Search }               from '@mui/icons-material';
import { useSearchGuidesQuery } from '@store/api/searchApi';
import { Loader }               from '@components/Loader';
import { MainContainer }        from '../components/MainContainer';
import { GuideList }            from '../components/GuideList';

export const Home = () => {
  const navigate          = useNavigate();
  const [query, setQuery] = useState<string>('');
  const { data: guides }  = useSearchGuidesQuery(query);

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
        <TextField
          autoComplete = "off"
          placeholder  = "Search"
          onChange     = {handleQueryChange}
          InputProps   = {{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
      
        <ListWrapper variant="outlined">
          {(guides.length > 0) ? (
            <GuideList
              guides  = {guides}
              onClick = {id => navigate(`/guide/${id}`)}
            />
          ) : (
            <Stack py={4} px={2} spacing={1}>
              <Typography textAlign="center" variant="h2">🤷‍♂️</Typography>
              <Typography textAlign="center" variant="body2">Nothing found</Typography>
            </Stack>
          )}
        </ListWrapper>
      </Stack>
    </MainContainer>
  );
};

const ListWrapper = styled(Paper)`
  overflow: hidden;
`;
