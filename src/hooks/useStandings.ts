import { useQuery } from "@tanstack/react-query";
import type { StandingsDataType } from "@/types/standingTypes";

const fetchStandings = async (year: number): Promise<StandingsDataType[]> => {
  const response = await fetch(
    `https://f1api.dev/api/${year}/drivers-championship`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch standings");
  }
  const data = await response.json();
  return data.drivers_championship;
};

export const useStandings = (year: number | null = null) => {
  const currentYear = new Date().getFullYear();
  const selectedYear = year || currentYear;

  return useQuery({
    queryKey: ["standings", selectedYear],
    queryFn: () => fetchStandings(selectedYear),
  });
};
