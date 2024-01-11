import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateRangeReducer from './reducers/DateRangeSlice';
import locationsReducer from './reducers/LocationsSlice';

const rootReducer = combineReducers({
  dateRangeReducer,
  locationsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];