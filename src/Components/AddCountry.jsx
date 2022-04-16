import React, { useState } from "react";
import { UpdateDetails } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AddCountry = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Country Added Successfully");
    const details = {
      country_name: country,
      city_name: city,
      population: population,
    };
    dispatch(UpdateDetails(details));
  };

  //   const HandleContinue = () => {
  //     console.log("country", country);
  //     navigate("/add-city", <AddCity country_name={country} />);
  //   };

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

{
  /* <div>
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
    </div> */
}