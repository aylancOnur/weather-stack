import React from "react";

const WeatherCard = ({weather}) => {
  return (
    <div className="card">
      <h2>
        {weather?.location?.name}, {weather?.location?.country}:{" "}
        {weather?.current?.weather_descriptions[0]}. It is currently{" "}
        {weather?.current?.temperature} celcius out. It feels like{" "}
        {weather?.current?.feelslike} celcius out
      </h2>
    </div>
  );
};

export default WeatherCard;
