import { ADD_COUNTRY, ADD_COUNTRY_ERROR, ADD_COUNTRY_LOADING } from "./action";

const initState = {
    loading: false,
    error: false,
    country: []
};

export const countryReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_COUNTRY_LOADING:
            return { ...store, loading: true };
        case ADD_COUNTRY:
            return { ...store, loading: false, error: false, country: [...payload] };
        case ADD_COUNTRY_ERROR:
            return { ...store, loading: false, error: true, country: [] }
        default:
            return store;
    }
}