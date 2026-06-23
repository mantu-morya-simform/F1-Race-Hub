export interface RaceDataType {
  raceId: string;
  championshipId: string;
  raceName: string;
  schedule: Schedule;
  laps: number;
  round: number;
  url: string;
  fast_lap: FastLap;
  circuit: Circuit;
  winner: Winner;
  teamWinner: TeamWinner;
}

export interface Schedule {
  race: Session;
  qualy: Session;
  fp1: Session;
  fp2: Session;
  fp3: Session;
  sprintQualy: Session;
  sprintRace: Session;
}

export interface Session {
  date: string | null;
  time: string | null;
}

export interface FastLap {
  fast_lap: string;
  fast_lap_driver_id: string;
  fast_lap_team_id: string;
}

export interface Circuit {
  circuitId: string;
  circuitName: string;
  country: string;
  city: string;
  circuitLength: string;
  lapRecord: string;
  firstParticipationYear: number;
  corners: number;
  fastestLapDriverId: string;
  fastestLapTeamId: string;
  fastestLapYear: number;
  url: string;
}

export interface Winner {
  driverId: string;
  name: string;
  surname: string;
  country: string;
  birthday: string;
  number: number;
  shortName: string;
  url: string;
}

export interface TeamWinner {
  teamId: string;
  teamName: string;
  country: string;
  firstAppearance: number;
  constructorsChampionships: number;
  driversChampionships: number;
  url: string;
}

export interface RaceSliceInitialState {
  isLoading: boolean;
  isError: string;
  data: RaceDataType[] | null;
}
