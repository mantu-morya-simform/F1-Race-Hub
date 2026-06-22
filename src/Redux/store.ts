import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import driverReducer from "./features/drivers/driverSlice";
import teamReducer from "./features/teams/teamsSlice";
import raceReducer from "./features/races/raceSlice";
import standingReducer from "./features/standings/standingSlice";
import circuitReducer from "./features/circuits/circuitSlice";
import { f1Api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    drivers: driverReducer,
    teams: teamReducer,
    circuits: circuitReducer,
    races: raceReducer,
    standings: standingReducer,
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
