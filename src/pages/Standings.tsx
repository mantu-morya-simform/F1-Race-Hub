import Driver from "@/components/Driver";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { StandingsDataType } from "@/types/standingTypes";
import { useSearchParams } from "react-router-dom";
import { useStandings } from "@/hooks";

const Standings = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);

  const [searchParams, setSearchParams] = useSearchParams();

  // get year from params
  const selectedYear = Number(searchParams.get("year") || currentYear);
  const search = searchParams.get("search") || "";
  const team = searchParams.get("team") || "";

  const { data: standingsData = [], isLoading } = useStandings(selectedYear);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    // update URL params
    setSearchParams({ year, search, team });
  };

  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value;
    // update URL params
    setSearchParams({ year: String(selectedYear), search: searchName, team });
  };

  const handleTeamSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTeam = e.target.value;
    // update URL params
    setSearchParams({ year: String(selectedYear), search, team: searchTeam });
  };

  function filterStandings(data: StandingsDataType[]) {
    return data.filter((driver) => {
      const matchName =
        search === "" ||
        driver.driver.name.toLowerCase().includes(search.toLowerCase());

      const matchTeam =
        team === "" ||
        driver.team.teamName.toLowerCase().includes(team.toLowerCase());

      return matchName && matchTeam;
    });
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <div className="flex justify-center gap-20 items-start">
        <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
          All Standing
        </h1>

        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 p-3 mt-2"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Search By Driver Name"
            value={search}
            onChange={handleNameSearch}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-gray-400 w-64"
          />
        </div>

        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Search By Team Name"
            value={team}
            onChange={handleTeamSearch}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-gray-400 w-64"
          />
        </div>
      </div>

      {isLoading && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading {selectedYear} Standing Data</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {!isLoading && standingsData
          ? filterStandings(standingsData).map((driver) => (
              <Driver
                key={driver.classificationId}
                driver={driver}
                year={selectedYear}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Standings;
