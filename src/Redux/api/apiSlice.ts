import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CircuitDataType } from "@/Redux/features/circuits/circuitTypes";
import type { DriverDataType } from "@/Redux/features/drivers/driverTypes";
import type { RaceDataType } from "@/Redux/features/races/raceTypes";
import type { StandingsDataType } from "@/Redux/features/standings/standingTypes";
import type { TeamDataType } from "@/Redux/features/teams/teamsTypes";

export const f1Api = createApi({
  reducerPath: "f1Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://f1api.dev/api/" }),
  endpoints: (builder) => ({
    getDrivers: builder.query<DriverDataType[], void>({
      query: () => "drivers",
      transformResponse: (response: { drivers: DriverDataType[] }) => response.drivers,
    }),
    getTeams: builder.query<TeamDataType[], void>({
      query: () => "teams",
      transformResponse: (response: { teams: TeamDataType[] }) => response.teams,
    }),
    getCircuits: builder.query<CircuitDataType[], void>({
      query: () => "circuits",
      transformResponse: (response: { circuits: CircuitDataType[] }) => response.circuits,
    }),
    getCurrentRaces: builder.query<RaceDataType[], void>({
      query: () => "current",
      transformResponse: (response: { races: RaceDataType[] }) => response.races,
    }),
    getStandings: builder.query<StandingsDataType[], number>({
      query: (year) => `${year}/drivers-championship`,
      transformResponse: (response: { drivers_championship: StandingsDataType[] }) =>
        response.drivers_championship,
    }),
  }),
});

export const {
  useGetDriversQuery,
  useGetTeamsQuery,
  useGetCircuitsQuery,
  useGetCurrentRacesQuery,
  useGetStandingsQuery,
} = f1Api;
