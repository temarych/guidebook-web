import { api } from '@store/api';

export interface ISignInRequest {
  email   : string;
  password: string;
}

export interface ISignUpRequest {
  username: string;
  email   : string;
  password: string;
}

export interface ISignInResponse {
  accessToken: string;
}

export interface ISignUpResponse {
  accessToken: string;
}

export interface IGetMeResponse {
  id      : string;
  username: string;
  email   : string;
}

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<ISignInResponse, ISignInRequest>({
      query: (body) => ({
        method: 'POST',
        url   : '/auth/signin',
        body
      }),
      invalidatesTags: ['guide']
    }),
    signUp: builder.mutation<ISignUpResponse, ISignUpRequest>({
      query: (body) => ({
        method: 'POST',
        url   : '/auth/signup',
        body
      }),
      invalidatesTags: ['guide']
    }),
    getMe: builder.query<IGetMeResponse, string | null>({
      query: () => ({
        url: '/auth/me'
      }),
      providesTags: ['me']
    }),
    deleteMe: builder.mutation<void, void>({
      query: () => ({
        method: 'DELETE',
        url   : '/auth/me'
      }),
      invalidatesTags: ['me']
    }),
  })
});

export const {
  useDeleteMeMutation,
  useGetMeQuery,
  useSignInMutation,
  useSignUpMutation
} = authApi;
