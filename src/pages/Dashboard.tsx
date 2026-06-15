import Card from "@/components/Card";
import TopDrivers from "@/components/TopDrivers";
import TopTeams from "@/components/TopTeams";
import UpcomingRace from "@/components/UpcomingRace";
import CircuitsInfo from "@/components/CircuitsInfo";
import type { DriverSliceInitialState } from "@/Redux/features/drivers/driverTypes";
import type { TeamSliceInitialState } from "@/Redux/features/teams/teamsTypes";
import type { RaceSliceInitialState } from "@/Redux/features/races/raceTypes";
import type { CircuitSliceInitialState } from "@/Redux/features/circuits/circuitTypes";
import type { StandingsSliceInitialState } from "@/Redux/features/standings/standingTypes";
import type { DispatchType, StoreType } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchDriversThunk from "@/Redux/features/drivers/driverThunk";
import fetchTeamsThunk from "@/Redux/features/teams/teamsThunk";
import fetchRaceThunk from "@/Redux/features/races/raceThunk";
import fetchCircuitsThunk from "@/Redux/features/circuits/circuitThunk";
import fetchStandingsThunk from "@/Redux/features/standings/standingThunk";

function Dashboard() {
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(fetchDriversThunk());
    dispatch(fetchTeamsThunk());
    dispatch(fetchRaceThunk());
    dispatch(fetchCircuitsThunk());
    dispatch(fetchStandingsThunk(2026));
  }, [dispatch]);

  const drivers: DriverSliceInitialState = useSelector(
    (state: StoreType) => state.drivers,
  );
  const teams: TeamSliceInitialState = useSelector(
    (state: StoreType) => state.teams,
  );
  const races: RaceSliceInitialState = useSelector(
    (state: StoreType) => state.races,
  );
  const circuits: CircuitSliceInitialState = useSelector(
    (state: StoreType) => state.circuits,
  );
  const standing: StandingsSliceInitialState = useSelector(
    (state: StoreType) => state.standings,
  );

  // console.log(drivers, teams, races, circuits, standing);
  // console.log(standing);

  const totalDrivers = drivers?.data?.length || 0;
  const totalTeams = teams?.data?.length || 0;
  const totalRaces = races?.data?.length || 0;
  const totalCircuits = circuits?.data?.length || 0;

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        F1 Dashboard
      </h1>

      {/* All Data State */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="Drivers" value={totalDrivers} extraState={drivers} />
        <Card title="Teams" value={totalTeams} extraState={teams} />
        <Card title="Races" value={totalRaces} extraState={races} />
        <Card title="Circuits" value={totalCircuits} extraState={circuits} />
      </div>

      {/* top 5 drivers */}
      <TopDrivers standingData={standing} />

      {/* top 5 teams */}
      <TopTeams teams={teams} />

      {/* Upcoming Race */}
      <UpcomingRace races={races} />

      {/* curtis info */}
      <CircuitsInfo circuits={circuits} />
    </div>
  );
}

export default Dashboard;
