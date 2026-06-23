import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FaUsers, FaGlobeEurope } from "react-icons/fa";
import type { TeamSliceInitialState } from "@/Redux/features/teams/teamsTypes";

const TopTeams = ({ teams }: { teams: TeamSliceInitialState }) => {
  const topTeams = teams?.data?.slice(0, 5) || [];

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
        {topTeams.map((team) => (
          <div
            key={team.teamId}
            className="bg-gray-800 text-white rounded-xl p-5
              shadow-md hover:shadow-xl transition-all duration-300
              border border-gray-700 hover:border-red-500
              flex flex-col justify-between h-full"
          >
            <div>
              {/* Team Name */}
              <h3 className="text-lg font-semibold text-red-400 mb-2 line-clamp-2 min-h-[48px] flex items-center gap-2">
                <FaUsers className="text-red-400" />
                {team.teamName}
              </h3>

              {/* Team Nationality */}
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <FaGlobeEurope className="text-red-400" />
                {team.teamNationality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTeams;
