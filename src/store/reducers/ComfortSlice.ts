import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ComfortState {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  have_express: boolean;
}

interface ComfortParam {
  name: string;
  checked: boolean;
}

const initialState: ComfortState = {
  have_first_class: false,
  have_second_class: true,
  have_third_class: false,
  have_fourth_class: false,
  have_wifi: false,
  have_air_conditioning: false,
  have_express: false,
}

export const comfortSlice = createSlice({
  name: 'comfort',
  initialState,
  reducers: {
    changeComfortSettings: (state, action: PayloadAction<ComfortParam>) => {
      const { name, checked } = action.payload;
      state[name as keyof typeof state] = checked;
    }
  }
});

export const { actions } = comfortSlice;
export const { changeComfortSettings } = comfortSlice.actions;

export default comfortSlice.reducer;
