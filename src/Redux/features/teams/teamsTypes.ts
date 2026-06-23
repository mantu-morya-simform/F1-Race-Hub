export interface TeamDataType {
  teamId: string;
  teamName: string;
  teamNationality: string;
  firstAppeareance: number | null;
  constructorsChampionships: number | null;
  driversChampionships: number | null;
  url: string;
}

export interface TeamSliceInitialState {
  isError: string;
  isLoading: boolean;
  data: TeamDataType[] | null;
}
