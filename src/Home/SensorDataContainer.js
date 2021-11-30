import React, { useState, useEffect } from "react";
import { WeatherItem } from "./WeatherItem/WeatherItem";
import { WeatherContainer } from "./Home.styled";
import { Button } from "antd";

import { useHistory } from "react-router-dom";
import { getAllSensorData, getAllWeather } from "../api/Api";
import { SensorDataItem } from "./WeatherItem/SensorDataItem";
const SensorDataContainer = () => {
  const [sensorDataList, setSensorDataList] = useState([]);
  let history = useHistory();
  function goToWeatherPage() {
    history.push({
      pathname: "/",
    });
  }

  useEffect(() => {
    getAllSensorData().then((res) => setSensorDataList(res));
  }, []);

  return (
    <WeatherContainer>
      {sensorDataList.map((sensorData) => {
        console.log(sensorDataList);
        return <SensorDataItem sensorData={sensorData}></SensorDataItem>;
      })}
      <Button onClick={goToWeatherPage}>Go to weather list</Button>
    </WeatherContainer>
  );
};

export default SensorDataContainer;
