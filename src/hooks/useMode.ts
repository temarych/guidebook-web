import { useCallback }              from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState }                from '@store/index';
import { setMode as setModeAction } from '@store/slices/modeSlice';
import { IMode }                    from '@typings/mode';

export const useMode = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: IAppState) => state.mode);

  const setMode = useCallback(
    (mode: IMode) => {
      dispatch(setModeAction(mode));
    },
    [dispatch],
  );

  return { mode, setMode };
};
