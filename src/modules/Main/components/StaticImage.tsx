import { styled } from '@mui/material';

export interface StaticImageProps {
  src: string;
}

export const StaticImage = ({
  src,
}: StaticImageProps) => (
  <Wrapper>
    <Image src={src}  />
    <Backdrop src={src} />
  </Wrapper>
);

const Wrapper = styled('div')`
  aspect-ratio : 1;
  width        : 100%;
  position     : relative;
  border-radius: 1rem;
  overflow     : hidden;
  border       : 1px solid ${({ theme }) => theme.palette.divider};
`;

const Image = styled('img')`
  position  : absolute;
  height    : 100%;
  width     : 100%;
  object-fit: contain;
  z-index   : 2;
`;

const Backdrop = styled('img')`
  filter    : blur(0.5rem) brightness(80%);
  position  : absolute;
  height    : 100%;
  width     : 100%;
  scale     : 110%;
  object-fit: cover;
  z-index   : 1;
`;
