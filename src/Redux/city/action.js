export const ADD_CITIES = "ADD_CITIES";
export const ADD_CITIES_LOADING = "ADD_CITIES_LOADING";
export const ADD_CITIES_ERROR = "ADD_CITIES_ERROR";

export const addcities = (payload) => ({
    type: ADD_CITIES,
    payload
});

export const addcitiesError = () => ({
    type: ADD_CITIES_ERROR
});
export const addcitiesLoading = () => ({
    type: ADD_CITIES_LOADING
});
export const addcitiesData = ({cityname,population,country}) => (dispatch) => {
    dispatch(addcitiesLoading());
    // const citydata = {
    //     cityname: data.cityname,
    //     population: data.population,
    //     country: data.country
    // }
    fetch(`http://localhost:8082/cities`, {
        method: "POST",
        body: JSON.stringify( { cityname, population, country } ),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((res) => dispatch(addcities({ cityname, population, country })))
        .catch((err) => dispatch(addcitiesError(err)));

};
