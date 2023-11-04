import { useCallback }                            from 'react';
import { useDispatch, useSelector }               from 'react-redux';
import { IAppState }                              from '@store/index';
import { setAccessToken as setAccessTokenAction } from '@store/slices/authSlice';
import { api }                                    from '@store/api';

export const useAccessToken = () => {
  const dispatch    = useDispatch();
  const accessToken = useSelector((state: IAppState) => state.auth.accessToken);

  const setAccessToken = useCallback(
    (accessToken: string | null) => {
      dispatch(setAccessTokenAction(accessToken));
      dispatch(api.util.invalidateTags(['self']));
    },
    [dispatch],
  );

  return { accessToken, setAccessToken };
};
