import { ADD_CITIES, ADD_CITIES_ERROR, ADD_CITIES_LOADING } from "./action";

const initState = {
    loading: false,
    error: false,
    cities: []
};

export const citiesReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_CITIES_LOADING:
            return { ...store, loading: true };
        case ADD_CITIES:
            return { ...store, loading: false, error: false, cities: [...payload,payload] };
        case ADD_CITIES_ERROR:
            return { ...store, loading: false, error: true, cities: [] }
        default:
            return store;
    }
}