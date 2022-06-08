import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-3">Weather App</h1>

        <Weather defaultCity="Toronto" />
        <footer>
          This project was coded by Favour Umoru and is open-sourced on
          <a
            href="https://github.com/Faay97/weather-react"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://fastidious-biscuit-2df509.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
