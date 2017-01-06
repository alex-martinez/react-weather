import React, { Component } from 'react';

import Weather from './weather';
import Forecast from './forecast';

export default class WeatherForecast extends Component {
  render() {
    console.log(this.props.weatherData);
    console.log(this.props.forecastData);

    return (
      <div className="app">
        {/*<div className="app__menu"></div>*/}

        <div className="app__top">
          <Weather weatherData={ this.props.weatherData } />
        </div>

        <div className="app__bottom">
          <Forecast forecastData={ this.props.forecastData } />
        </div>
      </div>
    );
  }
}
