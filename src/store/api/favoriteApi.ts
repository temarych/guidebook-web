import { api }           from '@store/api';
import { IGuidePreview } from '@typings/guide';

export type ISearchFavoriteGuidesResponse = IGuidePreview[];

export const favoriteApi = api.injectEndpoints({
  endpoints: builder => ({
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
    }),
    getFavoriteGuides: builder.query<ISearchFavoriteGuidesResponse, string>({
      query: (query) => ({
        url   : '/favorite/guides',
        params: { query },
      }),
      providesTags: ['guide']
    })
  })
});

export const {
  useAddFavoriteGuideMutation,
  useRemoveFavoriteGuideMutation,
  useGetFavoriteGuidesQuery
} = favoriteApi;
