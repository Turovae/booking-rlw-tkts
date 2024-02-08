export default interface Coach {
  _id: string;
  name: string;
  train: string;
  class_type: string;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_linens_included: boolean;
  price: number;
  side_price: number;
  top_price: number;
  bottom_price: number;
  wifi_price: number;
  linens_price: number;
  available_seats: number;
}
