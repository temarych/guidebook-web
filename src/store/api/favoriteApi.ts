import { api }           from '@store/api';
import { IGuidePreview } from '@typings/guide';

export type IGetFavoriteGuidesResponse = IGuidePreview[];

export const favoriteApi = api.injectEndpoints({
  endpoints: builder => ({
    getFavoriteGuides: builder.query<IGetFavoriteGuidesResponse, void>({
      query       : () => `/favorite/guides`,
      providesTags: ['guide']
    }),
    addFavoriteGuide: builder.mutation<void, string>({
      query: (id) => ({
        method: 'PUT',
        url   : `/favorite/guides/${id}`
      }),
      invalidatesTags: ['guide']
    }),
    removeFavoriteGuide: builder.mutation<void, string>({
      query: (id) => ({
        method: 'DELETE',
        url   : `/favorite/guides/${id}`
      }),
      invalidatesTags: ['guide']
    })
  })
});

export const {
  useAddFavoriteGuideMutation,
  useRemoveFavoriteGuideMutation,
  useGetFavoriteGuidesQuery
} = favoriteApi;
