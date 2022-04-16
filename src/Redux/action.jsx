// City name, Population and Country

export const COUNTRY_LOADING = "COUNTRY_LOADING";
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS";
export const COUNTRY_FAILED = "COUNTRY_FAILED";

export const CountryLoading = (payload) => ({
  type: COUNTRY_LOADING,
});

export const CountrySuccess = (payload) => ({
  type: COUNTRY_SUCCESS,
  payload,
});

export const CountryFailed = (payload) => ({
  type: COUNTRY_FAILED,
});

export const UpdateDetails = (details) => (dispatch) => {
  dispatch(CountryLoading);
  fetch(`http://localhost:8080/Country`, {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch(CountrySuccess(res)))
    .catch((err) => dispatch(CountryFailed(err)));
};