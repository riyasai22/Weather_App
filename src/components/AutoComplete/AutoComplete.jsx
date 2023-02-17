import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, options } from "../../api/GeoApi.jsx";
import "./AutoComplete.css";

export const AutoComplete = ({ onSearchUpdate }) => {
  //Use state hooks
  const [search, setSearch] = useState(null);

  //Functions

  //fetch from api and load
  async function loadOptions(input) {
    return await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${input}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  }
  function searchCity(input) {
    setSearch(input);
    onSearchUpdate(input);
  }

  return (
    <>
      <AsyncPaginate
        className="paginate"
        placeholder="Search for a city!"
        debounceTimeout={600}
        value={search}
        onChange={searchCity}
        loadOptions={loadOptions}
      />
    </>
  );
};
export default AutoComplete;
