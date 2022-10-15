import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { weatherReducer } from './HomeAction';
import { detailReducer } from './DetailsActions';


const store = configureStore({
   reducer: {weather: weatherReducer,
    detail: detailReducer}}
);
export default store;
