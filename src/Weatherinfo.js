import React from "react";
import FormattedDate from "./FormattedDate";

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
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt={props.data.description}
              className="float-left"
            />{" "}
            <div className="float-left d-inline">
              <span className="temp">{Math.round(props.data.temperature)}</span>{" "}
              <span className="units"> °C|°F </span>
            </div>
          </div>
        </div>
        <div className="col-6">
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
