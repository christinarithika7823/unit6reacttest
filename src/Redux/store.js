import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { citiesReducer } from "./city/reducer";
import { countryReducer } from "./Country/reducer";
import thunk from "redux-thunk";
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

const rootReducer = combineReducers({
    cities: citiesReducer,
    country: countryReducer
});

export const store = createStore(rootReducer,enhancer);
