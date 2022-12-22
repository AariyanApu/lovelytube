import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
  }),

  endpoints: (builder) => ({
    // getTopCharts: builder.query({ query: () => '/charts/world' }),

    getVideoDetails: builder.query({
      query: ({ videoid }) => `/search/?key=${apiKey}&part=snippet&order=relevance&q=${videoid}`,
    }),
  }),
});

export const { useGetVideoDetailsQuery } = youtubeApi;
