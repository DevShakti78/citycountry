import React, { useState } from "react";
import {
  CountryLoading,
  CountrySuccess,
  CountryFailed,
  UpdateDetails,
} from "../Redux/action";
import { useDispatch } from "react-redux";

export const AddCountry = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const details = {
      country_name: country,
      city_name: city,
      population: population,
    };

    dispatch(UpdateDetails(details));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Country Name"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="City Name"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Total Population"
        value={population}
        onChange={(e) => {
          setPopulation(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};