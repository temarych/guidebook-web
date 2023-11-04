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
    })
  })
});

export const {
  useSignInMutation,
  useSignUpMutation
} = authApi;
