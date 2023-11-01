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
  Person,
  Settings,
}                            from '@mui/icons-material';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Placeholder />
      <Wrapper variant="outlined">
        <StyledBottomNavigation showLabels value={pathname}>
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
            to        = "/profile"
            value     = "/profile"
            label     = "Profile"
            icon      = {<Person />}
          />
          <BottomNavigationAction
            component = {Link}
            to        = "/settings"
            value     = "/settings"
            label     = "Settings"
            icon      = {<Settings />}
          />
        </StyledBottomNavigation>
      </Wrapper>
    </>
  );
};

const Placeholder = styled('div')`
  height: var(--navbar-height);
`;

const Wrapper = styled(Paper)`
  position      : fixed;
  bottom        : 0;
  left          : 0;
  right         : 0;
  border-left   : 0;
  border-right  : 0;
  border-bottom : 0;
  border-radius : 0;
  z-index       : 1000;
  display       : flex;
  flex-direction: column;
  align-items   : center;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  width    : 100%;
  max-width: var(--main-max-width);
`;
