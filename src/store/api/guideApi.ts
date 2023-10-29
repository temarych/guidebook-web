import { api }    from '@store/api';
import { IGuide } from '@typings/guide';
import { IStep }  from '@typings/step';

export type IGetGuideResponse = IGuide;
export type IGetStepsResponse = IStep[];

export const guideApi = api.injectEndpoints({
  endpoints: builder => ({
    getGuide: builder.query<IGetGuideResponse, string>({
      query       : (quideId) => `/guide/${quideId}`,
      providesTags: ['guide']
    }),
    getSteps: builder.query<IGetStepsResponse, string>({
      query: (quideId) => `/guide/${quideId}/steps`
    })
  })
});

export const {
  useGetGuideQuery,
  useGetStepsQuery
} = guideApi;
