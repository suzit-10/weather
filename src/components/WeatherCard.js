import React, { useEffect } from "react";

const WeatherCard = ({ tempData }) => {
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = tempData;

  const [weatherIcon, setWeatherIcon] = React.useState("Sunny");

  const updateFontIcon = () => {
    switch (weatherMood) {
      case "Clouds":
        setWeatherIcon("wi-day-cloudy");
        break;
      case "Haze":
        setWeatherIcon("wi-fog");
        break;
      case "Clear":
        setWeatherIcon("wi-day-sunny");
        break;
      case "Mist":
        setWeatherIcon("wi-dust");
        break;

      default:
        setWeatherIcon("wi-day-sunny");
        break;
    }
  };

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    updateFontIcon();
  }, [weatherMood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherIcon}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* our 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
