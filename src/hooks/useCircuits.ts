import { useQuery } from "@tanstack/react-query";
import type { CircuitDataType } from "@/types/circuitTypes";

const fetchCircuits = async (): Promise<CircuitDataType[]> => {
  const response = await fetch("https://f1api.dev/api/circuits");
  if (!response.ok) {
    throw new Error("Failed to fetch circuits");
  }

  const data = await response.json();

  return data.circuits;
};

export const useCircuits = () => {
  return useQuery({
    queryKey: ["circuits"],
    queryFn: fetchCircuits,
  });
};
