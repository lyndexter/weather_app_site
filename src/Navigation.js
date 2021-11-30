import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateWeather } from "./CreateWeather/CreateWeather";
import Home from "./Home/Home";
import SensorDataContainer from "./Home/SensorDataContainer";
export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create_weather">
          <CreateWeather />
        </Route>
        <Route path="/sensor_data">
          <SensorDataContainer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
