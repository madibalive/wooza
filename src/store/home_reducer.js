import {
  FETCH_HOME_BEGIN,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE
} from "./actions";

import movies from "../movies.json";
import tvshows from "../tvshows.json";

const initialState = {
  items: [],
  movies: movies,
  tvshows: tvshows,
  genres: [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Mystery",
    "Romance",
    "Sport",
    "Thriller"
  ],
  loading: false,
  error: null
};

var homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_HOME_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.HOME
      };

    case FETCH_HOME_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default homeReducer;
