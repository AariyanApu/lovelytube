import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-v31.p.rapidapi.com',

    prepareHeaders: (headers) => {
      headers.set(
    'X-RapidAPI-Key', '54e7df357cmsh1280ac679a1d1f8p1d8585jsnd9f417f78316',
    'X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com'
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // getTopCharts: builder.query({ query: () => '/charts/world' }),

    getVideoDetails: builder.query({
      query: ({ videoid }) => `/search?q=${videoid}&maxResults=50&part=snippet,id&regionCode=us&order=date`,
    }),
  }),
});

export const { useGetVideoDetailsQuery } = youtubeApi;
