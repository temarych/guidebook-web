import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMode }                      from '@typings/mode';

export interface IModeState {
  mode: IMode;
}

export const initialModeState: IModeState = {
  mode: 'system',
};

export const modeSlice = createSlice({
  name        : 'mode',
  initialState: initialModeState,
  reducers    : {
    setMode(state, action: PayloadAction<IMode>) {
      state.mode = action.payload;
    }
  },
});

export const { setMode } = modeSlice.actions;
