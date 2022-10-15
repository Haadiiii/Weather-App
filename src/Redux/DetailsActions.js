import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAYDETAILS = 'weather-app/src/Redux/HomeActions/DISPLAYDETAILS';

const initialState = {
  data : [],
}

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAYDETAILS:
      return {
        ...state,
        data: action.weather,
      };
    default:
      return state;
  }
};

export const fetchCity = createAsyncThunk(DISPLAYDETAILS, async (city, {dispatch}) => {
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=104126515dcd47909287677b53fb12dd&minutely`);
  const {data }= await response.json();
  dispatch({
    type: DISPLAYDETAILS,
    weather: data[0],
  })
  return data;
  
});
