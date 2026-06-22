import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { f1Api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    [f1Api.reducerPath]: f1Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(f1Api.middleware),
});

setupListeners(store.dispatch);

export default store;

export type AppStore = typeof store;
export type StoreType = ReturnType<AppStore["getState"]>;
export type DispatchType = AppStore["dispatch"];
