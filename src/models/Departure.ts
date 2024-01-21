import { AvailableSeatsInfo } from "./AvailableSeatsInfo";
import { Train } from "./Train";
import { PriceInfo } from "./PriceInfo";
import { Schedule } from "./Schedule";

export interface Departure {
  _id: string;
  available_seats: number;
  available_seats_info: AvailableSeatsInfo;
  duration: number;
  from: Schedule;
  to: Schedule;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  train: Train;
  price_info: PriceInfo;
}
