import {
  createApi,
  fetchBaseQuery
}                           from '@reduxjs/toolkit/query/react';
import { setAccessToken }   from '@store/slices/authSlice';
import { IAppState, store } from '@store/index';

export const apiUrl = import.meta.env.VITE_API_URL as string;

export const api = createApi({
  reducerPath: 'api',
  tagTypes   : ['guide', 'self'],
  baseQuery  : fetchBaseQuery({
    baseUrl       : apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as IAppState).auth.accessToken;

      if (accessToken) {
        headers.set('Authorization', accessToken);
      }

      return headers;
    },
    async fetchFn(input, init) {
      const result = await fetch(input, init);

      if (result.status === 401) {
        store.dispatch(setAccessToken(null));
      }

      return result;
    },
  }),
  endpoints: () => ({})
});
