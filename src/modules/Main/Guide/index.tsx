import {
  useCallback,
  useMemo
}                           from 'react';
import { debounce }         from 'lodash';
import { useParams }        from 'react-router-dom';
import {
  Fab,
  Stack,
  Typography,
  styled
}                           from '@mui/material';
import { PlayArrowRounded } from '@mui/icons-material';
import {
  useAddFavoriteGuideMutation,
  useRemoveFavoriteGuideMutation,
}                           from '@store/api/favoriteApi';
import {
  useGetGuideQuery,
  useGetStepsQuery
}                           from '@store/api/guideApi';
import { useDisclosure }    from '@hooks/useDisclosure';
import { UserTag }          from '@components/UserTag';
import { Loader }           from '@components/Loader';
import { Podium }           from '@components/Podium';
import { MainContainer }    from '../components/MainContainer';
import { MainMask }         from '../components/MainMask';
import { StaticImage }      from '../components/StaticImage';
import { FavoriteButton }   from './FavoriteButton';
import { PlayDialog }       from './PlayDialog';

export const Guide = () => {
  const params                                 = useParams();
  const guideId                                = params.guideId as string;
  const { data: guide }                        = useGetGuideQuery(guideId);
  const { data: steps }                        = useGetStepsQuery(guideId);
  const [addFavoriteGuide]                     = useAddFavoriteGuideMutation();
  const [removeFavoriteGuide]                  = useRemoveFavoriteGuideMutation();
  const [isPlayDialogOpen, playDialogHandlers] = useDisclosure();

  const handleToggleFavorite = useMemo(
    () => debounce((isFavorite: boolean) => {
      if (isFavorite) {
        addFavoriteGuide(guideId);
      } else {
        removeFavoriteGuide(guideId);
      }
    }, 500),
    [addFavoriteGuide, removeFavoriteGuide, guideId],
  );

  const handlePlayGuide = useCallback(
    () => playDialogHandlers.open(),
    [playDialogHandlers],
  );

  if (!guide || !steps) return <Loader />;
  
  return (
    <>
      <MainContainer spacing={4}>
        <StaticImage src={guide.image} />
        
        <Stack
          direction      = "row"
          alignItems     = "center"
          justifyContent = "space-between"
          spacing        = {1}
        >
          <Stack spacing={1}>
            <UserTag
              avatar   = {null}
              username = {guide.author.username}
            />
            <Typography variant="h6">
              {guide.title}
            </Typography>
          </Stack>
          <FavoriteButton
            fontSize          = "2.1rem"
            defaultIsFavorite = {guide.isFavorite}
            onToggleFavorite  = {handleToggleFavorite}
          />
        </Stack>
      
        <Typography variant="body1">
          {guide.description}
        </Typography>

        <Grid>
          <Podium
            value   = {guide.likesCount}
            caption = "Likes"
          />
          <Podium
            value   = {steps.length}
            caption = "Steps"
          />
          <Podium
            value   = {Intl.DateTimeFormat('en', { year: 'numeric' }).format(guide.createdAt)}
            caption = {Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(guide.createdAt)}
          />
        </Grid>
      </MainContainer>

      <MainMask>
        <PlayButton
          color    = "primary"
          disabled = {!steps.length}
          onClick  = {handlePlayGuide}
        >
          <PlayArrowRounded fontSize="large" />
        </PlayButton>
      </MainMask>

      <PlayDialog
        open     = {isPlayDialogOpen}
        guide    = {guide}
        steps    = {steps}
        onClose  = {playDialogHandlers.close}
      />
    </>
  );
};

const PlayButton = styled(Fab)`
  position: absolute;
  right   : 0;
  bottom  : 0;
`;

const Grid = styled('div')`
  display              : grid;
  grid-template-columns: repeat(3, 1fr);
  border               : 1px solid ${({ theme }) => theme.palette.divider};
  padding              : ${({ theme }) => theme.spacing(2)};
  border-radius        : ${({ theme }) => `${theme.shape.borderRadius}px`};
`;
