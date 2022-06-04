import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather ">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-dark" />
            </div>
          </div>
        </form>

        <h1 className="mt-4">{weatherData.city}</h1>
        <ul>
          <li>Wednesday 09:17</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="http://openweathermap.org/img/wn/04n@2x.png"
                alt={weatherData.description}
                className="float-left"
              />{" "}
              <div className="float-left d-inline">
                <span className="temp">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="units"> °C|°F </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Percipitation: 15%</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "802da19fbd96f9f2e7628a11787fa0b1";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    return "Loading...";
  }
}
