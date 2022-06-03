import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-5">Weather App</h1>

        <Weather />
        <footer>
          This project was coded by Favour Umoru and is open-sourced on
          <a
            href="https://github.com/Faay97/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
