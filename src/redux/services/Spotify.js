import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Spotify = createApi({
  redducerPath: "Spotify ",
  baseQuery: {
    baseurl: "https://spotify23.p.rapidapi.com",
    prepareHeaders: fetchBaseQuery((headers) => headers.set("", "")),
  },
  endpoints: (builder) => ({
    getSong: builder.query({query : ()=> '' }),
  }),
});


