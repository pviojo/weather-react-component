import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherWidget from "../WeatherWidget";

const ConnectedWeatherWidget = ({ city }) => {
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cac58004ab49afeea2b509c0f692672&units=metric&lang=sp`
      )
      .then(rsp => {
        const dataTemperature = Math.round(rsp.data.main.temp);
        const dataFeelsLike = Math.round(rsp.data.main.feels_like);
        let dataIcon = rsp.data.weather[0].main;
        let dataHumidity = rsp.data.main.humidity;
        let dataWind = Math.round(rsp.data.wind.speed);
        let dataDescription = rsp.data.weather[0].description;

        if (dataIcon === "Clouds") {
          dataIcon = "cloud";
        }
        if (dataIcon === "Clear") {
          dataIcon = "sun";
        }

        setTemperature(dataTemperature);
        setFeelsLike(dataFeelsLike);
        setHumidity(dataHumidity);
        setDescription(dataDescription);
        setIcon(dataIcon);
        setWind(dataWind);
        setLoading(false);
      });
  }, [city]);

  return (
    <WeatherWidget
      loading={loading}
      temperature={temperature}
      feelsLike={feelsLike}
      city={city}
      icon={icon}
      description={description}
      wind={wind}
      humidity={humidity}
    />
  );
};

export default ConnectedWeatherWidget;
