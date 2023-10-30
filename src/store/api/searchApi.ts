import { api }           from '@store/api';
import { IGuidePreview } from '@typings/guide';

export type ISearchGuidesResponse         = IGuidePreview[];
export type ISearchFavoriteGuidesResponse = IGuidePreview[];

export const searchApi = api.injectEndpoints({
  endpoints: builder => ({
    searchGuides: builder.query<ISearchGuidesResponse, string>({
      query: (query) => ({
        url   : '/search/guides',
        params: { query },
      })
    }),
    searchFavoriteGuides: builder.query<ISearchFavoriteGuidesResponse, string>({
      query: (query) => ({
        url   : '/search/favorite/guides',
        params: { query },
      }),
      providesTags: ['guide']
    })
  })
});

export const {
  useSearchGuidesQuery,
  useSearchFavoriteGuidesQuery
} = searchApi;
