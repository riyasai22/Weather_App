import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import {
  OPEN_WEATHER_API_KEY,
  OPEN_WEATHER_API_URL,
} from "./api/OpenWeatherApi";
import { useState } from "react";
import Forecast from "./components/Forecast/Forecast";

function App() {
  //Use State Hooks
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  //functions
  const searchUpdate = (input) => {
    //console.log(input);

    const [latitude, longitude] = input.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    )
      .then()
      .catch();

    const forecastFetch = fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    )
      .then()
      .catch();
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const currentWeatherResp = await res[0].json();
        const forecastResp = await res[1].json();

        setCurrentWeather({ city: input.label, ...currentWeatherResp });
        setForecast({ city: input.label, ...forecastResp });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url("bg.png")`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* marginTop: "0px", marginBottom: "0px", marginLeft: "auto", marginRight:
      "auto", */}
      <div className="main-wrapper">
        <AutoComplete onSearchUpdate={searchUpdate} />
        <CurrentWeather data={currentWeather} />
        <Forecast data={forecast} />
      </div>
    </div>
  );
}

export default App;
