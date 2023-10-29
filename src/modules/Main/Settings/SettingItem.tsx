import { ReactNode } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
}                    from '@mui/material';

export interface SettingItemProps {
  name           : string;
  startDecorator?: ReactNode;
  endDecorator?  : ReactNode;
}

export const SettingItem = ({
  name,
  startDecorator,
  endDecorator
}: SettingItemProps) => (
  <ListItem>
    <ListItemIcon sx={{ minWidth: '2.5rem' }}>
      {startDecorator}
    </ListItemIcon>
    <ListItemText>
      <Typography variant="body1" sx={{ flex: 1 }}>
        {name}
      </Typography>
    </ListItemText>
    {endDecorator}
  </ListItem>
);
