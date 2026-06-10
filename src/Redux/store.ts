import { configureStore } from "@reduxjs/toolkit";
import driverReducer from "./features/drivers/driverSlice";
import teamReducer from "./features/teams/teamsSlice";
import raceReducer from "./features/races/raceSlice";
import standingReducer from "./features/standings/standingSlice";
import circuitReducer from "./features/circuits/circuitSlice";

const store = configureStore({
  reducer: {
    drivers: driverReducer,
    teams: teamReducer,
    circuits: circuitReducer,
    races: raceReducer,
    standings: standingReducer,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
