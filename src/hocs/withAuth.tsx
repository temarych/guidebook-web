import { FC }              from 'react';
import { Navigate }        from 'react-router-dom';
import { useSelector }     from 'react-redux';
import { useGetSelfQuery } from '@store/api/selfApi';
import { IAppState }       from '@store/index';
import { Loader }          from '@components/Loader';

export const withAuth = <Props extends object,>(Component: FC<Props>) => (props: Props) => {
  const accessToken = useSelector((state: IAppState) => state.auth.accessToken);
  
  const { isLoading: isAuthorizing } = useGetSelfQuery();

  if (isAuthorizing) {
    return <Loader />;
  }

  if (!accessToken) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <Component {...props} />
  );
};
