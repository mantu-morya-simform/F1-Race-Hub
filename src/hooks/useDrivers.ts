import { useQuery } from "@tanstack/react-query";
import type { DriverDataType } from "@/types/driverTypes";

const fetchDrivers = async (): Promise<DriverDataType[]> => {
  const response = await fetch("https://f1api.dev/api/drivers");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }
  const data = await response.json();
  return data.drivers;
};

export const useDrivers = () => {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: fetchDrivers,
  });
};
