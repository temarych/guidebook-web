import {
  useCallback,
  useState
}                     from 'react';
import { IconButton } from '@mui/material';
import {
  Favorite,
  FavoriteBorderOutlined
}                     from '@mui/icons-material';

export interface FavoriteButtonProps {
  defaultIsFavorite: boolean;
  onToggleFavorite?: (isFavorite: boolean) => void;
}

export const FavoriteButton = ({
  defaultIsFavorite,
  onToggleFavorite,
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(defaultIsFavorite);

  const handleToggleFavorite = useCallback(
    () => {
      setIsFavorite(!isFavorite);
      onToggleFavorite?.(!isFavorite);
    },
    [isFavorite, onToggleFavorite],
  );

  return (
    <IconButton
      size    = "large"
      color   = {isFavorite ? 'error' : 'default'}
      onClick = {handleToggleFavorite}
    >
      {isFavorite ? (
        <Favorite sx={{ fontSize: '2.1rem' }} />
      ) : (
        <FavoriteBorderOutlined sx={{ fontSize: '2.1rem' }} />
      )}
    </IconButton>
  );
};
