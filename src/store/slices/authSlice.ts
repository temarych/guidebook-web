import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  accessToken: string | null;
}

export const initialAuthState: IAuthState = {
  accessToken: null
};

export const authSlice = createSlice({
  name        : 'theme',
  initialState: initialAuthState,
  reducers    : {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    }
  },
});

export const { setAccessToken } = authSlice.actions;
