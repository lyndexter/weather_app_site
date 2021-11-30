import React, { useState, useEffect } from "react";
import { WeatherItem } from "./WeatherItem/WeatherItem";
import { WeatherContainer } from "./Home.styled";
import { Button } from "antd";

import { useHistory } from "react-router-dom";
import { getAllWeather } from "../api/Api";
const Home = () => {
  const [weatherList, setWeatherList] = useState([]);
  let history = useHistory();
  function goToCreateWeatherPage() {
    history.push({
      pathname: "/create_weather",
    });
  }
  function goToSensorDataContainer() {
    history.push({
      pathname: "/sensor_data",
    });
  }

  useEffect(() => {
    getAllWeather().then((res) => setWeatherList(res));
    console.log(weatherList);
  }, []);

  return (
    <WeatherContainer>
      {weatherList.map((weather) => (
        <WeatherItem weather={weather}></WeatherItem>
      ))}
      <Button onClick={goToCreateWeatherPage}>Add new weather</Button>
      <Button onClick={goToSensorDataContainer}>Show sensor data</Button>
    </WeatherContainer>
  );
};

export default Home;
