import axios from "axios";

const BaseRequest = axios.create({
  baseURL:
    "https://ass0weh8ie.execute-api.eu-central-1.amazonaws.com/dev/weather",
  // "http://localhost:8081/weather",
  responseType: "json",
});

export const getAllWeather = async () => {
  const weatherList = await (await BaseRequest.get()).data;
  return weatherList;
};

export const postNewWeather = (weather) => {
  BaseRequest.post("", weather).then((response) => console.log(response));
};
