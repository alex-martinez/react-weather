/* eslint-disable */
import React, { Component } from 'react';

const WeatherIcon = ({ weatherIconCode }) => {
  // Reference: http://www.alessioatzeni.com/meteocons/
  // Reference: http://openweathermap.org/weather-conditions
  const iconList = {
    // Day
    "01d": "B",
    "02d": "H",
    "03d": "N",
    "04d": "Y",
    "09d": "Q",
    "10d": "R",
    "11d": "Z",
    "13d": "W",
    "50d": "L",

    // Night
    "01n": "2",
    "02n": "3",
    "03n": "5",
    "04n": "%",
    "09n": "7",
    "10n": "8",
    "11n": "&",
    "13n": "#",
    "50n": "L"
  };

  return <div className="weather__icon" data-icon={ iconList[weatherIconCode] } />;
};

WeatherIcon.propTypes = {
  weatherIconCode: React.PropTypes.string.isRequired
};

export default WeatherIcon;
