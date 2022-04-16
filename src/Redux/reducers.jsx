import { COUNTRY_LOADING, COUNTRY_SUCCESS, COUNTRY_FAILED } from "./action";

const initState = {
  loading: false,
  country: "",
  city: "",
  population: "",
  error: false,
};

export const countryReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case COUNTRY_LOADING:
      return { ...store, loading: true };
    case COUNTRY_SUCCESS:
      return {
        ...store,
        loading: false,
        country: payload.country,
        city: payload.city,
        population: payload.population,
        error: false,
      };
    case COUNTRY_FAILED:
      return {
        ...store,
        loading: false,
        country: "",
        city: "",
        population: "",
        error: true,
      };
    default:
      return store;
  }
};