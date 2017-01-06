import React, { Component } from 'react';

import { convertUnixTimestamp } from '../shared';
import ConvertKelvin from './convert-kelvin';
import WeatherIcon from './weather-icon';

export default class Weather extends Component {
  render() {
    const {
      dt: timestamp,
      weather: [
        {
          id: weatherCode,
          description: weatherDesc,
          icon: weatherIconCode
        }
      ],
      main: {
        temp: kelvin,
        humidity,
        temp_min: tempMin,
        temp_max: tempMax
      },
      name: cityName,
      sys: { country }
    } = this.props.weatherData;

    // Reference
    // http://www.alessioatzeni.com/meteocons/
    // http://openweathermap.org/weather-conditions

    return (
      <div>
        <h1 className="weather__location">{ `${cityName}, ${country}` }</h1>
        <div className="current-date">{ convertUnixTimestamp(timestamp) }</div>
        <div className="wrapper">
          <div>
            <div className="weather__temp">
              <strong><ConvertKelvin kelvin={ kelvin } convertTo="fahrenheit" /></strong>
            </div>

            <div className="weather__hi-lo">
              <span>H <ConvertKelvin kelvin={ kelvin } convertTo="fahrenheit" /></span>
              <span>L <ConvertKelvin kelvin={ kelvin } convertTo="fahrenheit" /></span>
            </div>

            <div className="weather__desc">{ weatherDesc }</div>
          </div>

          <div>
            <WeatherIcon weatherIconCode={ weatherIconCode } />
          </div>
        </div>
      </div>
    );
  }
}
