import { Outlet }   from 'react-router-dom';
import { NavBar }   from '@modules/Main/components/NavBar';
import { withAuth } from '@hocs/withAuth';

export const Main = withAuth(() => (
  <>
    <Outlet />
    <NavBar />
  </>
));
