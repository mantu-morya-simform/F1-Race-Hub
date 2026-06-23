export interface CircuitDataType {
  circuitId: string;
  circuitName: string;
  country: string;
  city: string;
  circuitLength: number;
  lapRecord: string;
  firstParticipationYear: number;
  numberOfCorners: number;
  fastestLapDriverId: string;
  fastestLapTeamId: string;
  fastestLapYear: number;
  url: string;
}

export interface CircuitSliceInitialState {
  isLoading: boolean;
  isError: string;
  data: CircuitDataType[] | null;
}
