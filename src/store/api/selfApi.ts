import { api }           from '@store/api';
import { IGuidePreview } from '@typings/guide';
import { IUser }         from '@typings/user';

export type IGetSelfResponse     = IUser;
export type IGetMyGuidesResponse = IGuidePreview[];

export const selfApi = api.injectEndpoints({
  endpoints: builder => ({
    getSelf: builder.query<IGetSelfResponse, void>({
      query: () => ({
        url: '/self'
      }),
      providesTags: ['self']
    }),
    getMyGuides: builder.query<IGetMyGuidesResponse, string>({
      query: (query) => ({
        url   : '/self/guides',
        params: { query }
      }),
      providesTags: ['self']
    }),
    deleteSelf: builder.mutation<void, void>({
      query: () => ({
        method: 'DELETE',
        url   : '/self'
      }),
      invalidatesTags: ['self']
    })
  })
});

export const {
  useDeleteSelfMutation,
  useGetSelfQuery,
  useGetMyGuidesQuery
} = selfApi;
