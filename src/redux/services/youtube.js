import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',

    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '54e7df357cmsh1280ac679a1d1f8p1d8585jsnd9f417f78316',
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = youtubeApi