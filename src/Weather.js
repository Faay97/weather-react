import React from "react";

import "./App.css";
import "./Weather.css";

export default function Weather() {
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

      <h1 className="mt-4">Toronto</h1>
      <ul>
        <li>Wednesday 09:17</li>
        <li>Overcast Clouds</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt="Overcast Clouds"
              className="float-left"
            />{" "}
            <div className="float-left d-inline">
              <span className="temp">19</span>{" "}
              <span className="units"> °C|°F </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: 82%</li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
