import { useNavigate }                      from 'react-router-dom';
import { Paper, Stack, Typography, styled } from '@mui/material';
import { useGetFavoriteGuidesQuery }        from '@store/api/favoriteApi';
import { Loader }                           from '@components/Loader';
import { MainContainer }                    from '../components/MainContainer';
import { GuideList }                        from '../components/GuideList';

export const Favorite = () => {
  const navigate         = useNavigate();
  const { data: guides } = useGetFavoriteGuidesQuery();

  if (!guides) return <Loader />;

  return (
    <MainContainer title="Favorite">
      <ListWrapper variant="outlined">
        {guides.length > 0 ? (
          <GuideList
            guides  = {guides}
            onClick = {id => navigate(`/guide/${id}`)}
          />
        ) : (
          <Stack py={4} px={2} spacing={1}>
            <Typography textAlign="center" variant="h2">🔍</Typography>
            <Typography textAlign="center" variant="body2">No favorite guides</Typography>
          </Stack>
        )}
      </ListWrapper>
    </MainContainer>
  );
};

const ListWrapper = styled(Paper)`
  overflow: hidden;
`;
