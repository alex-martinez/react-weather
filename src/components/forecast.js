import React, { Component } from 'react';

import ConvertKelvin from './convert-kelvin';

import { convertUnixTimestamp } from '../shared';

function findMinMax(arr, minMax) {
  const minTemp = arr.reduce( (prev, curr) => Math.min(prev, curr) );
  const maxTemp = arr.reduce( (prev, curr) => Math.max(prev, curr) );
  return minMax === "min" ? minTemp : maxTemp;
}

export default class Forecast extends Component {
  findHis(arrOfObj) {
    const tempMaxArr = arrOfObj.map(obj => obj.main.temp_max);
    return tempMaxArr;
  }

  findLows(arrOfObj) {
    const tempMinArr = arrOfObj.map(obj => obj.main.temp_min);
    return tempMinArr;
  }

  renderDayWeather(obj) {
    const day = obj.day;
    const hiKelvin = findMinMax(obj.tempMaxList, "max");
    const loKelvin = findMinMax(obj.tempMinList, "min");

    return (
      <li className="forecast-list__li" key={ day }>
        <div className="forecast-list__inner-top">
          <div className="left">{ day }</div>
          <div className="right">
            <ConvertKelvin kelvin={ hiKelvin } convertTo="fahrenheit" />
            {" | "}
            <ConvertKelvin kelvin={ loKelvin } convertTo="fahrenheit" />
          </div>
        </div>
        <div className="forecast-list__inner-bottom">

        </div>
      </li>
    );
  }

  render() {
    const threeHourForecastList = this.props.forecastData.list;
    const day1List = threeHourForecastList.slice(0, 8);
    const day2List = threeHourForecastList.slice(8, 16);
    const day3List = threeHourForecastList.slice(16, 24);
    const day4List = threeHourForecastList.slice(24, 32);
    const day5List = threeHourForecastList.slice(32, 40);

    const fiveDays = [
      convertUnixTimestamp(day1List[0].dt),
      convertUnixTimestamp(day2List[0].dt),
      convertUnixTimestamp(day3List[0].dt),
      convertUnixTimestamp(day4List[0].dt),
      convertUnixTimestamp(day5List[0].dt)
    ];

    const fiveDayForceast = [
      {
        day: fiveDays[0],
        list: day1List,
        tempMinList: this.findLows(day1List),
        tempMaxList: this.findHis(day1List)
      },
      {
        day: fiveDays[1],
        list: day2List,
        tempMinList: this.findLows(day2List),
        tempMaxList: this.findHis(day2List)
      },
      {
        day: fiveDays[2],
        list: day3List,
        tempMinList: this.findLows(day3List),
        tempMaxList: this.findHis(day3List)
      },
      {
        day: fiveDays[3],
        list: day4List,
        tempMinList: this.findLows(day4List),
        tempMaxList: this.findHis(day4List)
      },
      {
        day: fiveDays[4],
        list: day5List,
        tempMinList: this.findLows(day5List),
        tempMaxList: this.findHis(day5List)
      }
    ];

    console.log(fiveDayForceast);

    return (
      <ul className="forecast-list">
        { fiveDayForceast.map(this.renderDayWeather) }
      </ul>
    );
  }
}
