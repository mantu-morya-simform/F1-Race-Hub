export interface DriverType {
  name: string;
  surname: string;
  nationality: string;
  birthday: string;
  number: number;
  shortName: string;
  url: string;
}

export interface TeamType {
  teamId: string;
  teamName: string;
  country: string;
  firstAppareance: number;
  constructorsChampionships: number;
  driversChampionships: number;
  url: string;
}

export interface StandingsDataType {
  classificationId: number;
  driverId: string;
  teamId: string;
  points: number;
  position: number;
  wins: number;
  driver: DriverType;
  team: TeamType;
}

export interface StandingsSliceInitialState {
  isError: string;
  isLoading: boolean;
  data: StandingsDataType[] | null;
}
