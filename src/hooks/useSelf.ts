import { useSelector }   from 'react-redux';
import { IAppState }     from '@store/index';
import { useGetMeQuery } from '@store/api/authApi';

export const useSelf = () => {
  const accessToken                      = useSelector((state: IAppState) => state.auth.accessToken);
  const { data: self = null, isLoading } = useGetMeQuery(accessToken);

  return { self, isLoading };
};
