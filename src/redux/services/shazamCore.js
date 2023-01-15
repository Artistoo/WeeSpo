import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createStore } from "redux";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi" /* key */,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "0e56cfa6damsh07cd963f147964bp1fbf0cjsn86c42b1dc4d9"
      );
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
      query: ( artistId ) => `/artists/details?artist_id=${artisartistIdtId}`,
    }),
  }),
});



export const ShazamCoreApiV2 = createApi({
  reducerPath : 'shazamCoreApiV2' , 
  baseQuery : fetchBaseQuery({
    baseUrl : 'https://shazam-core.p.rapidapi.com/v2' ,
    prepareHeaders : (headers)=>{
      headers.set(`X-RapidAPI-Key` , "0e56cfa6damsh07cd963f147964bp1fbf0cjsn86c42b1dc4d9" )
      headers.set(`X-RapidAPI-Host`,  "shazam-core.p.rapidapi.com")
      return headers ;
    }
  }),
  endpoints: (builder)=> ({
    getArtistDetails : builder.query({query : (artistID)=> `/artists/details?artist_id=${artistID}` })
  })
})



export const {
  useGetArtistDetailsQuery
} = ShazamCoreApiV2


export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} = shazamCoreApi;
