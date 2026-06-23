import type { TeamDataType } from "@/types/teamsTypes";
import { FaGlobeEurope, FaUsers } from "react-icons/fa";

const Team = ({ team }: { team: TeamDataType }) => {
  return (
    <div
      key={team.teamId}
      className="bg-gray-800 text-white rounded-xl p-5
                  shadow-md hover:shadow-xl transition-all duration-300
                  border border-gray-700 hover:border-red-500
                  flex flex-col justify-between h-full"
    >
      <div>
        {/* Team Name */}
        <h3 className="text-lg font-semibold text-red-400 mb-2 line-clamp-2 min-h-12 flex items-center gap-2">
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
  );
};

export default Team;
