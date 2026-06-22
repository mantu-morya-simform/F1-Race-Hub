import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type {
  TeamDataType,
  TeamSliceInitialState,
} from "@/Redux/features/teamsTypes";
import Team from "./Team";

const TopTeams = ({ teams }: { teams: TeamSliceInitialState }) => {
  const topTeams: TeamDataType[] = teams?.data?.slice(0, 5) || [];

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-bold text-red-400 mb-4 flex justify-center">
        Top Teams
      </h2>

      {teams.isLoading && !teams.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center justify-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Top Teams...</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topTeams.map((team: TeamDataType) => (
          <Team team={team} key={team.teamId} />
        ))}
      </div>
    </div>
  );
};

export default TopTeams;
