import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// REDUX LIFE CYCLE
// Action -> dispatch -> Reducers -> Store
// Booking Form -> Submit Form -> Ticket Counters -> Railway Central Store