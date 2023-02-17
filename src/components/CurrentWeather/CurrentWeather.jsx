// contains the basic weather details

import { useEffect } from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  const sunrise = data ? data.sys.sunrise : 0;
  const sunset = data ? data.sys.sunset : 0;
  var dt = "";
  function timeConverter(time_in_unix) {
    var a = new Date(time_in_unix * 1000);

    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ":" + min;
    return time;
  }
  let sunrise_normal_time = "-";
  let sunset_normal_time = "-";

  function handleSunriseTime() {
    if (sunrise !== 0) {
      sunrise_normal_time = timeConverter(sunrise);
    }
    console.log(data.sys);

    return sunrise_normal_time;
  }

  function handleSunsetTime() {
    if (sunset !== 0) {
      sunset_normal_time = timeConverter(sunset);
    }
    return sunset_normal_time;
  }
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="weather-main">
      <div className="section-1">
        <div className="details">
          <img
            src={`symbols/${data ? data.weather[0].icon : "unknown"}.png`}
            className="weather-icon"
            alt="weather-pic"
          />
          <p className="weather">{data ? data.weather[0].description : "-"}</p>
          <p className="city">{data ? data.city.replace(",", ", ") : "-"}</p>
          <p className="temperature">
            {data ? Math.round(data.main.temp) : "-"}
            °C
          </p>
        </div>

        <div className="extra-details">
          <div className="temperature-details">
            <div className="temperature-item">
              <p className="temperature-label">Feels Like</p>
              <p className="temperature-value">
                {data ? Math.round(data.main.feels_like) : "-"}
                °C
              </p>
            </div>

            <div className="temperature-item">
              <p className="temperature-label">Humidity</p>
              <p className="temperature-value">
                {data ? data.main.humidity : "-"} %
              </p>
            </div>

            <div className="temperature-item">
              <p className="temperature-label">Pressure</p>
              <p className="temperature-value">
                {data ? data.main.pressure : "-"} Ps
              </p>
            </div>

            <div className="temperature-item">
              <p className="temperature-label">Wind</p>
              <p className="temperature-value">
                {data ? data.main.temp : ""} km/hr
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sunrise-sunset">
        <div className="temperature-item">
        <img src="symbols/02d.png" alt="sunset" />
          <p className="temperature-label">Sunrise</p>
          <p className="temperature-value">
            {data ? handleSunriseTime() : "-"} AM
          </p>
        </div>
        <div className="temperature-item">
          <img src="symbols/01d.png" alt="sunset" />
          <p className="temperature-label">Sunset</p>
          <p className="temperature-value">{data ? handleSunsetTime() : "-"} PM</p>
        </div>
      </div>
    </div>
  );
  // return data ? (
  //   <div className="forecast-main">
  //     {dt}
  //     <div className="weather-main">
  //       <img
  //         src={`symbols/${data ? data.weather[0].icon : "unknown"}.png`}
  //         className="weather-icon"
  //         alt="weather-pic"
  //       />
  //       <p className="weather">{data ? data.weather[0].description : "-"}</p>
  //       <p className="city">{data ? data.city : "-"}</p>
  //     </div>
  //     <div className="extra-details">
  //       <p className="temperature">
  //         {data ? Math.round(data.main.temp) : "-"}
  //         °C
  //       </p>
  //       <div className="temperature-details">
  //         <h4 className="title">Details</h4>

  //         <div className="temperature-item">
  //           <p className="temperature-label">Feels Like</p>
  //           <p className="temperature-value">
  //             {data ? Math.round(data.main.feels_like) : "-"}
  //             °C
  //           </p>
  //         </div>

  //         <div className="temperature-item">
  //           <p className="temperature-label">Humidity</p>
  //           <p className="temperature-value">
  //             {data ? data.main.humididty : "-"}%
  //           </p>
  //         </div>

  //         <div className="temperature-item">
  //           <p className="temperature-label">Pressure</p>
  //           <p className="temperature-value">
  //             {data ? data.main.pressure : "-"}hPa
  //           </p>
  //         </div>

  //         <div className="temperature-item">
  //           <p className="temperature-label">Wind</p>
  //           <p className="temperature-value">
  //             {data ? data.main.temp : ""} km/hr
  //           </p>
  //         </div>

  //         <div className="temperature-item">
  //           <p className="temperature-label">Sunrise</p>
  //           <p className="temperature-value">
  //             {data ? handleSunriseTime() : "-"}
  //           </p>
  //         </div>
  //         <div className="temperature-item">
  //           <p className="temperature-label">Sunset</p>
  //           <p className="temperature-value">
  //             {data ? handleSunsetTime() : "-"}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ) : (
  //   <>
  //     <p></p>
  //   </>
  // );
};

export default CurrentWeather;
