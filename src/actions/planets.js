import { call, put, take } from "redux-saga/effects";

export const FETCH_STAR_WARS_PLANETS_REQUEST =
  "FETCH_STAR_WARS_PLANETS_REQUEST";
export const FETCH_STAR_WARS_PLANETS_SUCCESS =
  "FETCH_STAR_WARS_PLANETS_SUCCESS";
export const CONFIRMATION_FETCH_REQUEST = "CONFIRMATION_FETCH_REQUEST";

const api = url => fetch(url).then(response => response.json());

export const fetchStarWarsPlanetsRequest = () => ({
  type: FETCH_STAR_WARS_PLANETS_REQUEST
});

export function* fetchPlanets() {
  try {
    yield take(CONFIRMATION_FETCH_REQUEST);
    const planets = yield call(api, "https://swapi.co/api/planets/");

    yield put({ type: FETCH_STAR_WARS_PLANETS_SUCCESS, data: planets.results });
  } catch (e) {
    console.log(e);
  }
}
