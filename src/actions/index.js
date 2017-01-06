/* eslint-disable */
import 'whatwg-fetch';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_WEATHER_FORECAST = 'FETCH_WEATHER_FORECAST';

const API_KEY = '99e1b19fd7cf5e730a0757d43f619b55';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/';
const WEATHER_API = `${ROOT_URL}/weather?appid=${API_KEY}`;
const FORECAST_API = `${ROOT_URL}/forecast?appid=${API_KEY}`;

export function fetchWeatherForecast(city) {
  const requestWeather = `${WEATHER_API}&q=${city},us`;
  const requestForecast = `${FORECAST_API}&q=${city},us`;

  function fetchingWeather() {
    return fetch(requestWeather)
      .then(response => response.json())
      .then(json => json);
  }

  function fetchingForecast() {
    return fetch(requestForecast)
      .then(response => response.json())
      .then(json => json);
  }

  function restructureResponse(response) {
    let weatherData = response[0];
    let forecastData = response[1];
    let city = forecastData.city.name;

    let restructure = {
      "weatherData": weatherData,
      "forecastData": forecastData
    }

    return restructure;
  }

  const requestPayload = Promise.all([fetchingWeather(),fetchingForecast()])
    .then(response => restructureResponse(response));

  return {
    type: FETCH_WEATHER_FORECAST,
    payload: requestPayload
  };
}
