import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './schemas/authSlice';


export const store = configureStore({
  reducer: {
    auth:authSlice,
    // mainapp: combineReducers({filters: filterSlice, mapPointsUnfiltered: mapPointsUnfilteredSlice, mapPointsFiltered: mapPointsFilteredSlice})
  },
});
