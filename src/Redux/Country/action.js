export const ADD_COUNTRY = "ADD_COUNTRY";
export const ADD_COUNTRY_LOADING = "ADD_COUNTRY_LOADING";
export const ADD_COUNTRY_ERROR = "ADD_COUNTRY_ERROR";

export const addcountry = (payload) => ({
    type: ADD_COUNTRY,
    payload
});

export const addcountryError = () => ({
    type: ADD_COUNTRY_ERROR
});
export const addcounytryLoading = () => ({
    type: ADD_COUNTRY_LOADING
});
export const addcountryData = ({text}) => (dispatch) => {
    dispatch(addcounytryLoading());
    fetch(`http://localhost:8081/countries`, {
        method: "POST",
        body: JSON.stringify({text}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((res) => dispatch(addcountry({text})))
        .catch((err) => dispatch(addcountryError(err)));

};