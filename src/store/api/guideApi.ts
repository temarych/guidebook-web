import { api }                   from '@store/api';
import { IGuide, IGuidePreview } from '@typings/guide';
import { IStep }                 from '@typings/step';

export type IGetGuideResponse     = IGuide;
export type IGetStepsResponse     = IStep[];
export type ISearchGuidesResponse = IGuidePreview[];

export const guideApi = api.injectEndpoints({
  endpoints: builder => ({
    getGuide: builder.query<IGetGuideResponse, string>({
      query: (quideId)  => `/guides/${quideId}`,
      transformResponse: (response: IGetGuideResponse) => ({
        ...response,
        createdAt: new Date(response.createdAt)
      }),
      providesTags: ['guide']
    }),
    getSteps: builder.query<IGetStepsResponse, string>({
      query: (quideId) => `/guides/${quideId}/steps`
    }),
    getGuides: builder.query<ISearchGuidesResponse, string>({
      query: (query) => ({
        url   : '/guides/',
        params: { query },
      })
    })
  })
});

export const {
  useGetGuideQuery,
  useGetStepsQuery,
  useGetGuidesQuery
} = guideApi;
