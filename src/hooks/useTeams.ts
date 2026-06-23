import { useQuery } from "@tanstack/react-query";
import type { TeamDataType } from "@/types/teamsTypes";

const fetchTeams = async (): Promise<TeamDataType[]> => {
  const response = await fetch("https://f1api.dev/api/teams");
  if (!response.ok) {
    throw new Error("Failed to fetch teams");
  }
  const data = await response.json();
  return data.teams;
};

export const useTeams = () => {
  return useQuery({
    queryKey: ["teams"],
    queryFn: fetchTeams,
  });
};
