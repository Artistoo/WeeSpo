import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import { shazamCoreApi , ShazamCoreApiV2 } from "./services/shazamCore";
const middlewares  = [shazamCoreApi.middleware , ShazamCoreApiV2.middleware] 
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [ShazamCoreApiV2.reducerPath] : ShazamCoreApiV2.reducer, 
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),

});
