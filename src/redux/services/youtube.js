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
      query: ({ videoid }) =>
        `/search/?key=${apiKey}&part=snippet&order=relevance&q=${videoid}&maxResults=50`,
    }),
    getRelatedVideoDetails: builder.query({
      query: ({ relatedid }) =>
        `/search/?key=${apiKey}&part=snippet&maxResults=25&regionCode=BD&relatedToVideoId=${relatedid}&safeSearch=none&type=video`,
    }),
    getRelatedVideoDetailsById: builder.query({
      query: ({ relatedid }) =>
        `/videos/?key=${apiKey}&part=snippet&id=${relatedid}`,
    }),
  }),
});

export const { useGetVideoDetailsQuery, useGetRelatedVideoDetailsQuery, useGetRelatedVideoDetailsByIdQuery } = youtubeApi;
