import React, { useEffect } from "react";
import "./Forecast.css";
const Forecast = ({ data }) => {
  // useEffect(() => {
  //   console.log(data);
  //   // eslint-disable-next-line array-callback-return
  //   // data.list.splice(0, 10).map((item, id) => {
  //   //   console.log(item.dt_txt);
  //   // });
  // }, []);
  const week = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const currentDay = new Date().getDay();
  const forecastDays = week
    .slice(currentDay, week.length)
    .concat(week.slice(0, currentDay));
  return (
    <div className="forecast_main">
      <h3 className="title">{data ? "Daily" : ""}</h3>
      <div className="daily-list">
        {data ? (
          data.list.splice(0, 7).map((item, id) => (
            <div key={id}>
              <div className="daily-item">
                <img
                  src={`symbols/${item.weather[0].icon}.png`}
                  className="weather-icon"
                  alt="forecast-pic"
                />
                <p className="day">{forecastDays[id] + "day"}</p>
                <p className="descr">{item.weather[0].description}</p>
                <p className="min-max">
                  {Math.round(
                    item.main.temp_min - Math.random() * (10 - 1) + 1
                  )}
                  °C /{Math.round(item.main.temp_max)}°C
                </p>
              </div>

              {/* <div className="daily-details">
                <div className="daily-details-item">
                  <p>Pressure</p>
                  <p>{item.main.pressure} hPa</p>
          </div>*/}
            </div>
          ))
        ) : (
          <></>
        )}
        {/* {data ? (
          data.list.splice(0, 10).map((item, id) => (
            <div className="daily-item" key={id}>
              <p>{item.dt_txt}</p>
              <img
                src={`symbols/${item.weather[0].icon}.png`}
                className="weather-icon"
                alt="forecast-pic"
              />
            </div>
          ))
        ) : (
          <>Not found</>
        )} */}
      </div>

      {/*       
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 10).map((item, id) => {
          <AccordionItem key={id}>
            (
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`symbols/${item.weather[0].icon}.png`}
                    className="weather-icon"
                    alt="forecast-pic"
                  />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>)
          </AccordionItem>;
        })}
      </Accordion> */}
    </div>
  );
};

export default Forecast;
