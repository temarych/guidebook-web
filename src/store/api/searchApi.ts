import { api }           from '@store/api';
import { IGuidePreview } from '@typings/guide';

export type ISearchGuidesResponse = IGuidePreview[];

export const searchApi = api.injectEndpoints({
  endpoints: builder => ({
    searchGuides: builder.query<ISearchGuidesResponse, string>({
      query: (query) => ({
        url   : '/search/guides',
        params: { query },
      })
    }),
  })
});

export const {
  useSearchGuidesQuery
} = searchApi;
