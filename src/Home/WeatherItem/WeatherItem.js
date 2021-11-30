import React from "react";
import "antd/dist/antd.css";
import {
  StyledWeatherItem,
  WeatherItemContent,
  StyledButton,
  DeleteButton,
  EditButton,
} from "./Weathertem.styled";

export const WeatherItem = (props) => {
  const { weather } = props;
  return (
    <StyledWeatherItem>
      <WeatherItemContent>
        <div>Place</div>
        <div>Day</div>
        <div>Average temperature</div>
        <div>Cataclysm</div>
        <div>hour 1 temperature</div>
        <div>hour 6 temperature</div>
        <div>hour 12 temperature</div>
        <div>hour 16 temperature</div>
        <div>hour 18 temperature</div>
        <div>hour 20 temperature</div>
        <div>hour 22 temperature</div>
        <h3>{weather.place}</h3>
        <div>{weather.day}</div>
        <div>{weather.day_weather}</div>
        <div>{weather.cataclysm}</div>
        <div>{weather.hour_1}</div>
        <div>{weather.hour_6}</div>
        <div>{weather.hour_12}</div>
        <div>{weather.hour_16}</div>
        <div>{weather.hour_18}</div>
        <div>{weather.hour_20}</div>
        <div>{weather.hour_22}</div>
        {console.log(weather)}
      </WeatherItemContent>
    </StyledWeatherItem>
  );
};
