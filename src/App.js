import { useEffect, useState } from "react";
import axios from "axios";
import SearchArea from "./components/SearchArea";
import WeatherCard from "./components/WeatherCard";
const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  useEffect(() => {
    getWeather();
  }, [city]);

  const getWeather = async () => {
    try {
      const { data } = await axios(
        `http://api.weatherstack.com/current?access_key=7958c117eedea9cdca7b0aeba0b90a15&query=${city}`
      );
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(weather);

  return (
    <div className="container">
      <SearchArea
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        city={city}
      />
      {weather.error ? <></> : <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
