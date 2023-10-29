import { FC }            from 'react';
import { Navigate }      from 'react-router-dom';
import { useSelector }   from 'react-redux';
import { useGetMeQuery } from '@store/api/authApi';
import { IAppState }     from '@store/index';
import { Loader }        from '@components/Loader';

export const withAuth = <Props extends object,>(Component: FC<Props>) => (props: Props) => {
  const accessToken = useSelector((state: IAppState) => state.auth.accessToken);

  const {
    currentData: user,
    isLoading  : isAuthorizing,
  } = useGetMeQuery(accessToken);

  if (isAuthorizing) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <Component {...props} />
  );
};
