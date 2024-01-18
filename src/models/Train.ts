import { ArrivalDeparture } from "./ArrivalDeparture";

export interface Train {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  arrival: ArrivalDeparture;
  departure: ArrivalDeparture;
  total_avaliable_seats: number;
}