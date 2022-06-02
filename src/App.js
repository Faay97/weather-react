import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello World</h1>
        <Weather city="Toronto" />
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
