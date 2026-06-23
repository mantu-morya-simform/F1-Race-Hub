import { useQuery } from "@tanstack/react-query";
import type { RaceDataType } from "@/types/raceTypes";

const fetchRaces = async (): Promise<RaceDataType[]> => {
  const response = await fetch("https://f1api.dev/api/current");
  if (!response.ok) {
    throw new Error("Failed to fetch races");
  }
  const data = await response.json();
  return data.races;
};

export const useRaces = () => {
  return useQuery({
    queryKey: ["races"],
    queryFn: fetchRaces,
  });
};
