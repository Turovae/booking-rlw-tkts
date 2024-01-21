import { City } from "./City";

export interface Schedule {
  city: City;
  datetime: number;
  railway_station_name: string;
}
