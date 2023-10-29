import { Fragment }      from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  Stack,
  Divider,
  styled,
  Typography,
}                        from '@mui/material';
import { ChevronRight }  from '@mui/icons-material';
import { IGuidePreview } from '@typings/guide';

export interface GuideListProps {
  guides  : IGuidePreview[];
  onClick?: (id: string) => void;
}

export const GuideList = ({
  guides,
  onClick
}: GuideListProps) => (
  <List disablePadding>
    {guides.map((guide, index) => (
      <Fragment key={index}>
        <ListItem disablePadding>
          <ListItemButton sx={{ py: 1.75 }} onClick={() => onClick?.(guide.id)}>
            <Stack direction="row" alignItems="center" spacing={2} width="100%">
              <Typography variant="h5">{guide.emoji}</Typography>
              <Stack flex={1}>
                <ClampTypography fontWeight="bold" variant="subtitle1">{guide.title}</ClampTypography>
                <ClampTypography variant="body2">{guide.description}</ClampTypography>
              </Stack>
              <ChevronRight />
            </Stack>
          </ListItemButton>
        </ListItem>
        {(index < guides.length - 1) && (
          <Divider />
        )}
      </Fragment>
    ))}
  </List>
);

const ClampTypography = styled(Typography)`
  overflow          : hidden;
  display           : -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; 
`;
