import { Outlet }   from 'react-router-dom';
import { Header }   from '@modules/Main/components/Header';
import { NavBar }   from '@modules/Main/components/NavBar';
import { withAuth } from '@hocs/withAuth';

export const Main = withAuth(() => (
  <>
    <Header />
    <Outlet />
    <NavBar />
  </>
));
