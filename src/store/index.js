import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home_reducer";
import movieReducer from "./movie_reducer";
import videoReducer from "./video_reducer";
import mediainfoReducer from "./media_info_reducer";

const initialStore = {
  authed: false,
  searchterm: "",
  searchSort: "movie"
};
const clientLogger = store => next => action => {
  if (action.type) {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  } else {
    return next(action);
  }
};

const reducers = combineReducers({
  home: homeReducer,
  movies: movieReducer,
  videos: videoReducer,
  info: mediainfoReducer
});

const ConfiguredStore = createStore(
  reducers,
  applyMiddleware(clientLogger, thunk)
);

export default ConfiguredStore;
