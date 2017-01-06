import { combineReducers } from 'redux';

import weatherForecastReducer from './weather-forecast';

const allReducers = combineReducers({
  weatherForecastList: weatherForecastReducer
});

export default allReducers;
