export interface DriverDataType {
  driverId: string;
  name: string;
  surname: string;
  nationality: string;
  birthday: string;
  number: number | null;
  shortName: string | null;
  url: string;
}

export interface DriverSliceInitialState {
  isLoading: boolean;
  isError: string;
  data: DriverDataType[] | null;
}
