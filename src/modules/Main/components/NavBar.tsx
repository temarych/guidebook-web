import { Link, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  styled,
}                            from '@mui/material';
import {
  Favorite,
  Home,
  Settings,
}                            from '@mui/icons-material';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Placeholder />
      <Wrapper variant="outlined">
        <BottomNavigation showLabels value={pathname}>
          <BottomNavigationAction
            component = {Link}
            to        = "/"
            value     = "/"
            label     = "Home"
            icon      = {<Home />}
          />
          <BottomNavigationAction
            component = {Link}
            to        = "/favorite"
            value     = "/favorite"
            label     = "Favorite"
            icon      = {<Favorite />}
          />
          <BottomNavigationAction
            component = {Link}
            to        = "/settings"
            value     = "/settings"
            label     = "Settings"
            icon      = {<Settings />}
          />
        </BottomNavigation>
      </Wrapper>
    </>
  );
};

const Placeholder = styled('div')`
  height: 56px;
`;

const Wrapper = styled(Paper)`
  position     : fixed;
  bottom       : 0;
  left         : 0;
  right        : 0;
  border-left  : 0;
  border-right : 0;
  border-bottom: 0;
  border-radius: 0;
  z-index      : 1000;
`;
