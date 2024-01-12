import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateRangeReducer from './reducers/DateRangeSlice';
import locationsReducer from './reducers/LocationsSlice';
import { citiesAPI } from "../services/GetCitiesService";

const rootReducer = combineReducers({
  dateRangeReducer,
  locationsReducer,
  [citiesAPI.reducerPath]: citiesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(citiesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
