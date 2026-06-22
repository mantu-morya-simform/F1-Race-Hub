import Card from "@/components/Card";
import TopDrivers from "@/components/TopDrivers";
import TopTeams from "@/components/TopTeams";
import UpcomingRace from "@/components/UpcomingRace";
import CircuitsInfo from "@/components/CircuitsInfo";
import {
  useGetDriversQuery,
  useGetTeamsQuery,
  useGetCurrentRacesQuery,
  useGetCircuitsQuery,
  useGetStandingsQuery,
} from "@/Redux/api/apiSlice";

function Dashboard() {
  const currentYear = new Date().getFullYear();

  const { data: drivers, isLoading: driversLoading } = useGetDriversQuery();
  const { data: teams, isLoading: teamsLoading } = useGetTeamsQuery();
  const { data: races, isLoading: racesLoading } = useGetCurrentRacesQuery();
  const { data: circuits, isLoading: circuitsLoading } = useGetCircuitsQuery();
  const { data: standings, isLoading: standingsLoading } =
    useGetStandingsQuery(currentYear);

  const totalDrivers = drivers?.length || 0;
  const totalTeams = teams?.length || 0;
  const totalRaces = races?.length || 0;
  const totalCircuits = circuits?.length || 0;

  const driversState = {
    isLoading: driversLoading,
    isError: "",
    data: drivers ?? null,
  };

  const teamsState = {
    isLoading: teamsLoading,
    isError: "",
    data: teams ?? null,
  };

  const racesState = {
    isLoading: racesLoading,
    isError: "",
    data: races ?? null,
  };

  const circuitsState = {
    isLoading: circuitsLoading,
    isError: "",
    data: circuits ?? null,
  };

  const standingState = {
    isLoading: standingsLoading,
    isError: "",
    year: currentYear,
    data: standings ?? null,
  };

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        F1 Dashboard
      </h1>

      {/* All Data State */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="Drivers" value={totalDrivers} extraState={driversState} />
        <Card title="Teams" value={totalTeams} extraState={teamsState} />
        <Card title="Races" value={totalRaces} extraState={racesState} />
        <Card
          title="Circuits"
          value={totalCircuits}
          extraState={circuitsState}
        />
      </div>

      {/* top 5 drivers */}
      <TopDrivers standingData={standingState} />

      {/* top 5 teams */}
      <TopTeams teams={teamsState} />

      {/* Upcoming Race */}
      <UpcomingRace races={racesState} />

      {/* curtis info */}
      <CircuitsInfo circuits={circuitsState} />
    </div>
  );
}

export default Dashboard;
