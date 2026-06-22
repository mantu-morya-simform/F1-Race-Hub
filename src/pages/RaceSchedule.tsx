import Race from "@/components/Race";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { RaceDataType } from "@/Redux/features/raceTypes";
import { useGetCurrentRacesQuery } from "@/Redux/api/apiSlice";
import { useSearchParams } from "react-router-dom";

const RaceSchedule = () => {
  const { data, isLoading } = useGetCurrentRacesQuery();
  const races = data ?? null;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const country = searchParams.get("country") || "";

  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value;
    setSearchParams({ search: searchName, country });
  };

  const handleCountrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchCountry = e.target.value;
    setSearchParams({ search, country: searchCountry });
  };

  function filterRaces(data: RaceDataType[]) {
    return data.filter((race) => {
      const matchName =
        search === "" ||
        race.raceName.toLowerCase().includes(search.toLowerCase());

      const matchCountry =
        country === "" ||
        race.circuit.country.toLowerCase().includes(country.toLowerCase());

      return matchName && matchCountry;
    });
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <div className="flex justify-center gap-20 items-start">
        <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
          All Races
        </h1>
        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Search By Race Name"
            value={search}
            onChange={handleNameSearch}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-gray-400 w-64"
          />
        </div>

        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Search By Country Name"
            value={country}
            onChange={handleCountrySearch}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-gray-400 w-64"
          />
        </div>
      </div>

      {isLoading && !races && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Race Data...</span>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {races
          ? filterRaces(races).map((race) => (
              <Race key={race.raceId} race={race} />
            ))
          : null}
      </div>
    </div>
  );
};

export default RaceSchedule;
