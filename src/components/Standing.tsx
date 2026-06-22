import { useGetStandingsQuery } from "@/Redux/api/apiSlice";
import type { StandingsDataType } from "@/Redux/features/standingTypes";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  FaFlagCheckered,
  FaGlobe,
  FaHashtag,
  FaMedal,
  FaTrophy,
  FaUsers,
  FaBirthdayCake,
} from "react-icons/fa";

const Standing = () => {
  const { standingsID } = useParams();
  const [searchParams] = useSearchParams();
  const [selectedStandings, setSelectedStandings] =
    useState<StandingsDataType | null>(null);

  const currentYear = new Date().getFullYear();
  const selectedYear = Number(searchParams.get("year") || currentYear);

  const { data: standings, isLoading } = useGetStandingsQuery(selectedYear);

  useEffect(() => {
    if (standings && standingsID) {
      const found = standings.find(
        (standing: StandingsDataType) =>
          standing.classificationId === Number(standingsID),
      );
      setSelectedStandings(found || null);
    }
  }, [standings, standingsID]);

  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  if (!selectedStandings) {
    return <div className="text-center text-white mt-10">Driver not found</div>;
  }

  const { driver, team, position, points, wins } = selectedStandings;

  return (
    <div className=" bg-gray-950 text-white p-4 md:p-8">
      <div
        className="max-w-5xl mx-auto bg-gray-900 rounded-2xl
        border border-gray-700 shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-green-600 p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            #{position} {driver.name} {driver.surname}
          </h1>

          <p className="text-gray-200 mt-2 text-sm md:text-lg">
            {team.teamName}
          </p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Driver Info */}
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="text-xl font-semibold text-red-400 mb-4">
              Driver Details
            </h2>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaHashtag className="text-red-400" />
                Number: {driver.number}
              </p>

              <p className="flex items-center gap-3">
                <FaGlobe className="text-red-400" />
                Nationality: {driver.nationality}
              </p>

              <p className="flex items-center gap-3">
                <FaBirthdayCake className="text-red-400" />
                Birthday: {driver.birthday}
              </p>

              <p className="flex items-center gap-3">
                <FaFlagCheckered className="text-red-400" />
                Short Name: {driver.shortName}
              </p>
            </div>
          </div>

          {/* Championship Info */}
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="text-xl font-semibold text-red-400 mb-4">
              Championship Stats
            </h2>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaMedal className="text-red-400" />
                Position: #{position}
              </p>

              <p className="flex items-center gap-3">
                <FaTrophy className="text-red-400" />
                Wins: {wins}
              </p>

              <p className="flex items-center gap-3">
                <FaFlagCheckered className="text-red-400" />
                Points: {points}
              </p>
            </div>
          </div>

          {/* Team Info */}
          <div className="bg-gray-800 rounded-xl p-5 md:col-span-2">
            <h2 className="text-xl font-semibold text-red-400 mb-4">
              Team Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <p className="flex items-center gap-3">
                <FaUsers className="text-red-400" />
                Team: {team.teamName}
              </p>

              <p>Country: {team.country}</p>

              <p>First Appearance: {team.firstAppareance}</p>

              <p>Constructors Titles: {team.constructorsChampionships ?? 0}</p>

              <p>Drivers Titles: {team.driversChampionships ?? 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standing;
