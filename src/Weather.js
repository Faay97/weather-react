import React from "react";
import axios from "axios";

import "./App.css";

export default function Weather(props) {
  function handleSubmit(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}°c`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=802da19fbd96f9f2e7628a11787fa0b1&units=metric`;
  axios.get(url).then(handleSubmit);

  return <h2>Heyyyy</h2>;
}
