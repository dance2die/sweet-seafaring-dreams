import React from "react";
import WeatherDescription from "./WeatherDescription";
import WeatherIcons from "./WeatherIcons";
import Temperature from "./Temperature";
import Greeting from "./Greeting";

const kelvinToFahrenheit = k => {
  return Math.round(((k - 273.15) * 1.8 + 32) * 10) / 10;
};

const kelvinToCelsius = k => {
  return Math.round((k - 273.15) * 10) / 10;
};

const WeatherContainer = props => (
  <>
    <h1 className="underline font-bold text-xl">
      {props.weather.name.toUpperCase()} WEATHER
    </h1>

    <WeatherDescription description={props.weather.weather[0].description} />

    <div className="flex justify-around">
      <WeatherIcons apiIcon={props.weather.weather[0].icon} />
    </div>

    <Temperature
      fahrenheit={kelvinToFahrenheit(props.weather.main.temp)}
      celsius={kelvinToCelsius(props.weather.main.temp)}
    />

    {props.userTime >= 18 || props.userTime <= 4 ? (
      <Greeting message="Good night and sweet seafaring dreams" />
    ) : (
      <Greeting />
    )}
  </>
);

export default WeatherContainer;
