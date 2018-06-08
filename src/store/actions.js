import { data } from "../data.json";

export const FETCH_HOME_BEGIN = "FETCH_HOME_BEGIN";
export const FETCH_HOME_SUCCESS = "FETCH_HOME_SUCCESS";
export const FETCH_HOME_FAILURE = "FETCH_HOME_FAILURE";

export const fetchHomeBegin = () => ({
  type: FETCH_HOME_BEGIN
});

export const fetchHomeSuccess = products => ({
  type: FETCH_HOME_SUCCESS,
  payload: { products }
});

export const fetchHomeError = error => ({
  type: FETCH_HOME_FAILURE,
  payload: { error }
});

export function fetchHomes() {
  return dispatch => {
    dispatch(fetchHomeBegin());

    // integrate parse here

    dispatch(fetchHomeSuccess(data));
  };
}

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchMoviesSuccess = products => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { products }
});

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export function fetchMovies() {
  return dispatch => {
    dispatch(fetchMoviesBegin());

    // integrate parse here

    dispatch(fetchMoviesSuccess(data));
  };
}

export const FETCH_TVSHOWS_BEGIN = "FETCH_TVSHOWS_BEGIN";
export const FETCH_TVSHOWS_SUCCESS = "FETCH_TVSHOWS_SUCCESS";
export const FETCH_TVSHOWS_FAILURE = "FETCH_TVSHOWS_FAILURE";

export const fetchTvshowsBegin = () => ({
  type: FETCH_TVSHOWS_BEGIN
});

export const fetchTvshowsSuccess = products => ({
  type: FETCH_TVSHOWS_SUCCESS,
  payload: { products }
});

export const fetchTvshowsError = error => ({
  type: FETCH_TVSHOWS_FAILURE,
  payload: { error }
});

export function fetchTvshows() {
  return dispatch => {
    dispatch(fetchTvshowsBegin());

    // integrate parse here

    dispatch(fetchTvshowsSuccess(data));
  };
}

export const FETCH_VIDEOS_BEGIN = "FETCH_VIDEOS_BEGIN";
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS";
export const FETCH_VIDEOS_FAILURE = "FETCH_VIDEOS_FAILURE";

export const fetchVideosBegin = () => ({
  type: FETCH_VIDEOS_BEGIN
});

export const fetchVideosSuccess = products => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: { products }
});

export const fetchVideosError = error => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: { error }
});

export function fetchVideos() {
  return dispatch => {
    dispatch(fetchVideosBegin());

    // integrate parse here

    dispatch(fetchVideosSuccess(data));
  };
}

export const FETCH_INFOPAGE_BEGIN = "FETCH_INFOPAGE_BEGIN";
export const FETCH_INFOPAGE_SUCCESS = "FETCH_INFOPAGE_SUCCESS";
export const FETCH_INFOPAGE_FAILURE = "FETCH_INFOPAGE_FAILURE";

export const fetchInfoBegin = () => ({
  type: FETCH_INFOPAGE_BEGIN
});

export const fetchInfoSuccess = products => ({
  type: FETCH_INFOPAGE_SUCCESS,
  payload: { products }
});

export const fetchInfoError = error => ({
  type: FETCH_INFOPAGE_FAILURE,
  payload: { error }
});

export function fetchInfo() {
  return dispatch => {
    dispatch(fetchInfoBegin());

    // integrate parse here

    dispatch(fetchInfoSuccess(data));
  };
}
