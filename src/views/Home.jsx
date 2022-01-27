import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [state, setState] = useState("pokhara");
  const [temp, setTemp] = useState({});
  const getWeatherDetails = async () => {
    try {
      let url = `
        https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=c8a61da4753d0ea0b3799acabdc985ac`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const weatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };
      setTemp(weatherInfo);
      console.log(weatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherDetails();
  }, []);
  return (
    <>
      <SearchComponent
        state={state}
        setState={setState}
        getWeatherDetails={getWeatherDetails}
      />
      <WeatherCard tempData={temp} />
    </>
  );
};

export default Home;
