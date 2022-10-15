import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAYWEATHER = 'weather-app/src/Redux/HomeActions/DISPLAYWEATHER';
const URL = 'https://api.weatherbit.io/v2.0/current?city=city&key=104126515dcd47909287677b53fb12dd&minutely';
const initialState = [];

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DISPLAYWEATHER}/fulfilled`:
      return action.payload.weather;
    default:
      return state;
  }
};

// action creator
export const fetchWeather = createAsyncThunk(DISPLAYWEATHER, async () => {
  await fetch(URL);
});
