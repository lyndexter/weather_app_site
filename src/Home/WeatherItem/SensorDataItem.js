import React from "react";
import "antd/dist/antd.css";
import {
  StyledSensorDataItem,
  SensorDataItemContent,
  StyledButton,
  DeleteButton,
  EditButton,
} from "./SensorDataItem.styled";

export const SensorDataItem = (props) => {
  const { sensorData } = props;
  return (
    <StyledSensorDataItem>
      <SensorDataItemContent>
        <div>Time</div>
        <div>Temperature</div>
        <div>Humidity</div>
        <div>Sensor name</div>
        <div>sensor type</div>
        <div>{sensorData.time}</div>
        <div>{sensorData.temperature}</div>
        <div>{sensorData.humidity}</div>
        <h3>{sensorData.sensor_name}</h3>
        <div>{sensorData.sensor_type}</div>
        {console.log(sensorData)}
      </SensorDataItemContent>
    </StyledSensorDataItem>
  );
};
