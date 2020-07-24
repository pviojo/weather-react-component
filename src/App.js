import React from "react";
import "./styles.css";

import WeatherWidget from "./components/WeatherWidget";
import ConnectedWeatherWidget from "./components/ConnectedWeatherWidget";

export default function App() {
  return (
    <div className="App">
      <ConnectedWeatherWidget city="Santiago" />
      <br />
      <ConnectedWeatherWidget city="Buenos Aires" />
      <br />
      <ConnectedWeatherWidget city="San Pedro de Atacama" />
    </div>
  );
}
