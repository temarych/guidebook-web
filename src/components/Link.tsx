import { ReactNode }          from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink }    from '@mui/material';

export interface LinkProps {
  to       : string;
  children?: ReactNode;
}

export const Link = (props: LinkProps) => (
  <MuiLink {...props} component={RouterLink} />
);
