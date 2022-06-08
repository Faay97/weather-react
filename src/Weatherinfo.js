import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function Weatherinfo(props) {
  return (
    <div className="weatherInfo">
      <h1 className="mt-4">{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={50} />{" "}
            <div className="d-inline">
              <WeatherUnit celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li></li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
