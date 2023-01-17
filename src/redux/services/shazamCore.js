import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { keys } from "../../../keys";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi" /* key */,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", keys.shazamCoreApikey);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getRelatedSongs: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artisartistIdtId}`,
    }),
    getSongsByCountry: builder.query({
      query: (country) => `/charts/country?country_code=${country}`,
    }),
    getSongByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongBySearch: builder.query({
      query: (search) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${search}`,
    }),
  }),
});

export const ShazamCoreApiV2 = createApi({
  reducerPath: "shazamCoreApiV2",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v2",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        keys.shazamCoreApikey
      );
      headers.set(`X-RapidAPI-Host`, keys.XRapidApiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({
      query: (artistID) => `/artists/details?artist_id=${artistID}`,
    }),
  }),
});

export const { useGetArtistDetailsQuery } = ShazamCoreApiV2;

export const {
  useGetSongByGenreQuery,
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongBySearchQuery,
} = shazamCoreApi;
