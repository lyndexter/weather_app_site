import axios from "axios";

const BaseRequest = axios.create({
  baseURL: "https://ass0weh8ie.execute-api.eu-central-1.amazonaws.com/dev",
  // "http://localhost:5000/",
  responseType: "json",
});

export const getAllWeather = async () => {
  const weatherList = await (await BaseRequest.get("weather")).data;
  return weatherList;
};

export const postNewWeather = (weather) => {
  BaseRequest.post("weather", weather).then((response) =>
    console.log(response)
  );
};

export const getAllSensorData = async () => {
  const sensor_data_list = await (await BaseRequest.get("sensor_data")).data;
  return sensor_data_list;
};

export const postNewSensorData = (sensor_data) => {
  BaseRequest.post("sensor_data", sensor_data).then((response) =>
    console.log(response)
  );
};
