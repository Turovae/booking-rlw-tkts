export interface GetRoutes {
  from_city_id: string;
  to_city_id: string;
  date_start?: string;
  date_end?: string;
  date_start_arrival?: string;
  date_end_arrival?: string;
  have_first_class?: boolean;
  have_second_class?: boolean;
  have_third_class?: boolean;
  have_fourth_class?: boolean;
  have_wifi?: boolean;
  have_air_conditioning?: boolean;
  have_express?: boolean;
  price_from?: number;
  price_to?: number;
  start_departure_hour_from?: number; // Час отбытия от
  start_departure_hour_to?: number; // Час отбытия до
  start_arrival_hour_from?: number; // Час прибытия от
  start_arrival_hour_to?: number; // Час прибытия до
  end_departure_hour_from?: number; // Час отбытия назад от
  end_departure_hour_to?: number; // Час отбытия назад до
  end_arrival_hour_from?: number; // Час прибытия назад от (работает при установленном параметре date_end)
  end_arrival_hour_to?: number; // Час прибытия назад до (работает при установленном параметре date_end)
  limit?: number;
  offset?: number;
  sort?: string;
}
