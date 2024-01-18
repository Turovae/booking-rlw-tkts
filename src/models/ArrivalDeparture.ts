import { ArrivalDepartureInfo } from "./ArrivalDepartureInfo";

export interface ArrivalDeparture {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  train: string;
  from: ArrivalDepartureInfo;
  to: ArrivalDepartureInfo;
  duration: number;
  price_info: number;
  seats_info: number;
}