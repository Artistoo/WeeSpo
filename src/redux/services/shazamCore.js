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
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
