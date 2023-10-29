import { useMemo }                                   from 'react';
import { RouterProvider, createBrowserRouter }       from 'react-router-dom';
import { CssBaseline, GlobalStyles, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMode }                                   from '@hooks/useMode';
import { Main }                                      from '@modules/Main';
import { Home }                                      from '@modules/Main/Home';
import { Favorite }                                  from '@modules/Main/Favorite';
import { Settings }                                  from '@modules/Main/Settings';
import { Guide }                                     from '@modules/Main/Guide';
import { Auth }                                      from '@modules/Auth';
import { SignIn }                                    from '@modules/Auth/SignIn';
import { SignUp }                                    from '@modules/Auth/SignUp';
import { getDesignTokens }                           from './theme';

const router = createBrowserRouter([
  {
    path    : '/',
    element : <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'favorite', element: <Favorite /> },
      { path: 'settings', element: <Settings /> },
      { path: 'guide/:guideId', element: <Guide /> }
    ]
  },
  {
    path    : '/auth',
    element : <Auth />,
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> }
    ]
  },
]);

export const App = () => {
  const { mode }        = useMode();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const systemMode      = prefersDarkMode ? 'dark' : 'light';
  const paletteMode     = mode === 'system' ? systemMode : mode;

  const theme = useMemo(
    () => getDesignTokens(paletteMode),
    [paletteMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            '--main-max-width': '30rem',
            '--header-height' : '4rem',
            '--navbar-height' : '56px'
          }
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
