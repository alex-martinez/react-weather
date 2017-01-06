import React from 'react';

function toFahrenheit(kelvin) {
  const fahrenheit = (kelvin * 1.8 - 459.67).toFixed(0);
  return fahrenheit;
}

function toCelsius(kelvin) {
  const celsius = (kelvin - 273.15).toFixed(0);
  return celsius;
}

const ConvertKelvin = (props) => {
  const convertTo = props.convertTo;
  const kelvin = props.kelvin;
  const celsius = toCelsius(kelvin);
  const fahrenheit = toFahrenheit(kelvin);

  return convertTo === "fahrenheit"
    ? <span>{ fahrenheit }&deg;</span>
    : <span>{ celsius }&deg;</span>;
}

ConvertKelvin.propTypes = {
  kelvin: React.PropTypes.number.isRequired,
  convertTo: React.PropTypes.oneOf(['fahrenheit', 'celsius']).isRequired
};

export default ConvertKelvin;
