import React, { useState } from "react";

import "antd/dist/antd.css";
import { Container } from "./CreateWeather.styled";
import { Input, Button } from "antd";
import { postNewWeather } from "../api/Api";
export const CreateWeather = () => {
  let weather = {
    place: null,
    day: null,
    day_weather: null,
    // cataclysm: null,
    // hour_1: null,
    // hour_2: null,
    // hour_3: null,
    // hour_4: null,
    // hour_5: null,
    // hour_6: null,
    // hour_7: null,
    // hour_8: null,
    // hour_9: null,
    // hour_10: null,
    // hour_11: null,
    // hour_12: null,
    // hour_13: null,
    // hour_14: null,
    // hour_15: null,
    // hour_16: null,
    // hour_17: null,
    // hour_18: null,
    // hour_19: null,
    // hour_20: null,
    // hour_21: null,
    // hour_22: null,
    // hour_23: null,
    // hour_24: null,
  };

  function sendPostRequest() {
    console.log(weather);
    if (weather.place == null) {
      alert("incorect place");
    }
    if (weather.day == null) {
      alert("incorect day");
    }
    if (weather.day_weather == null) {
      alert("incorect temperature on this day");
    }

    postNewWeather(weather);
  }
  function clearAll() {
    window.location.reload();
  }
  return (
    <Container>
      <Input
        placeholder="Place"
        onChange={(e) => (weather.place = e.target.value)}
      />
      <Input
        placeholder="Day"
        onChange={(e) => (weather.day = e.target.value)}
      />
      <Input
        placeholder="Average temperature on this day"
        onChange={(e) => (weather.day_weather = e.target.value)}
      />
      <Input
        placeholder="Cataclysm that is present in this day"
        onChange={(e) => (weather.cataclysm = e.target.value)}
      />
      <Input
        placeholder="hour 1 temperature"
        onChange={(e) => (weather.hour_1 = e.target.value)}
      />
      <Input
        placeholder="hour 2 temperature"
        onChange={(e) => (weather.hour_2 = e.target.value)}
      />
      <Input
        placeholder="hour 3 temperature"
        onChange={(e) => (weather.hour_3 = e.target.value)}
      />
      <Input
        placeholder="hour 4 temperature"
        onChange={(e) => (weather.hour_4 = e.target.value)}
      />
      <Input
        placeholder="hour 5 temperature"
        onChange={(e) => (weather.hour_5 = e.target.value)}
      />
      <Input
        placeholder="hour 6 temperature"
        onChange={(e) => (weather.hour_6 = e.target.value)}
      />
      <Input
        placeholder="hour 7 temperature"
        onChange={(e) => (weather.hour_7 = e.target.value)}
      />
      <Input
        placeholder="hour 8 temperature"
        onChange={(e) => (weather.hour_8 = e.target.value)}
      />
      <Input
        placeholder="hour 9 temperature"
        onChange={(e) => (weather.hour_9 = e.target.value)}
      />
      <Input
        placeholder="hour 10 temperature"
        onChange={(e) => (weather.hour_10 = e.target.value)}
      />
      <Input
        placeholder="hour 11 temperature"
        onChange={(e) => (weather.hour_11 = e.target.value)}
      />
      <Input
        placeholder="hour 12 temperature"
        onChange={(e) => (weather.hour_12 = e.target.value)}
      />
      <Input
        placeholder="hour 13 temperature"
        onChange={(e) => (weather.hour_13 = e.target.value)}
      />
      <Input
        placeholder="hour 14 temperature"
        onChange={(e) => (weather.hour_14 = e.target.value)}
      />
      <Input
        placeholder="hour 15 temperature"
        onChange={(e) => (weather.hour_15 = e.target.value)}
      />
      <Input
        placeholder="hour 16 temperature"
        onChange={(e) => (weather.hour_16 = e.target.value)}
      />
      <Input
        placeholder="hour 17 temperature"
        onChange={(e) => (weather.hour_17 = e.target.value)}
      />
      <Input
        placeholder="hour 18 temperature"
        onChange={(e) => (weather.hour_18 = e.target.value)}
      />
      <Input
        placeholder="hour 19 temperature"
        onChange={(e) => (weather.hour_19 = e.target.value)}
      />
      <Input
        placeholder="hour 20 temperature"
        onChange={(e) => (weather.hour_20 = e.target.value)}
      />
      <Input
        placeholder="hour 21 temperature"
        onChange={(e) => (weather.hour_21 = e.target.value)}
      />
      <Input
        placeholder="hour 22 temperature"
        onChange={(e) => (weather.hour_22 = e.target.value)}
      />
      <Input
        placeholder="hour 23 temperature"
        onChange={(e) => (weather.hour_23 = e.target.value)}
      />
      <Input
        placeholder="hour 24 temperature"
        onChange={(e) => (weather.hour_24 = e.target.value)}
      />
      <Button onClick={sendPostRequest}>Add weather</Button>
      <Button onClick={clearAll}>Clear</Button>
    </Container>
  );
};
