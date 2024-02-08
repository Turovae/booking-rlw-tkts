import { AvailableSeatsInfo } from "./AvailableSeatsInfo";
import { Departure } from "./Departure";

export interface Route {
  available_seats: number;
  available_seats_info: AvailableSeatsInfo;
  departure: Departure;
  arrival: Departure; // Подумать над имененем!!!
  have_air_conditioning: boolean;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  is_express: boolean;
  min_price: number;
}
