import { FC }              from 'react';
import { Navigate }        from 'react-router-dom';
import { useGetSelfQuery } from '@store/api/selfApi';
import { Loader }          from '@components/Loader';

export const withAuth = <Props extends object,>(Component: FC<Props>) => (props: Props) => {
  const {
    currentData: user,
    isLoading  : isAuthorizing,
  } = useGetSelfQuery();

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
