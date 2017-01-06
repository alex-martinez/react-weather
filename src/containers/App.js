/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherForecast from '../components/weather-forecast';
import { fetchWeather, fetchForecast, fetchWeatherForecast } from '../actions/index';

import '../assets/App.css';

class App extends Component {
  componentWillMount() {
    // this.props.fetchWeather('Austin');
    // this.props.fetchForecast('Austin');
    this.props.fetchWeatherForecast('Austin');
    // this.props.fetchWeatherForecast('Laredo');
  }

  renderWeatherForecast(data, index) {
    return (
      <div key={ index }>
        <WeatherForecast weatherData={ data.weatherData } forecastData={ data.forecastData } />
      </div>
    );
  }

  render() {
    if (!this.props.weatherForecastList) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        { this.props.weatherForecastList.map(this.renderWeatherForecast) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherForecastList: state.weatherForecastList
  };
}


export default connect(mapStateToProps, { fetchWeatherForecast })(App);
// export default connect(mapStateToProps)(App);

// export default connect(mapStateToProps, { fetchForecast })(App);
// export default connect(mapStateToProps, { fetchWeather })(App);
// export default connect(mapStateToProps, { fetchForecast, fetchWeather })(App);
