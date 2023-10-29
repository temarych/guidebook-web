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
import { MainContainer }    from '../components/MainContainer';
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
    <MainContainer>
      <Stack spacing={4}>
        <Image src={guide.image} />
        
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
            <Typography variant="h6" lineHeight="1.75rem">
              {guide.title}
            </Typography>
          </Stack>
          <FavoriteButton
            defaultIsFavorite = {guide.isFavorite}
            onToggleFavorite  = {handleToggleFavorite}
          />
        </Stack>
      
        <Typography variant="body1">
          {guide.description}
        </Typography>
      </Stack>

      <PlayButton
        color    = "primary"
        disabled = {!steps.length}
        onClick  = {handlePlayGuide}
      >
        <PlayArrowRounded fontSize="large" />
      </PlayButton>

      <PlayDialog
        open    = {isPlayDialogOpen}
        guide   = {guide}
        steps   = {steps}
        onClose = {playDialogHandlers.close}
      />
    </MainContainer>
  );
};

const Image = styled('img')`
  width        : 18rem;
  aspect-ratio : 1;
  border-radius: 1rem;
  align-self   : center;
  object-fit   : cover;
`;

const PlayButton = styled(Fab)`
  position: fixed;
  right   : 1rem;
  bottom  : calc(56px + 1rem);
`;
