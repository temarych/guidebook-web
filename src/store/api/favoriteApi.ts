import { api } from '@store/api';

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
    })
  })
});

export const {
  useAddFavoriteGuideMutation,
  useRemoveFavoriteGuideMutation
} = favoriteApi;
