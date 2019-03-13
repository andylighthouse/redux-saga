import { takeLatest, all } from "redux-saga/effects";

import { fetchPerson, FETCH_STAR_WARS_REQUEST } from "../actions/starWars";
import {
  fetchPlanets,
  FETCH_STAR_WARS_PLANETS_REQUEST
} from "../actions/planets";

function* rootSaga() {
  yield all([
    yield takeLatest(FETCH_STAR_WARS_REQUEST, fetchPerson),
    yield takeLatest(FETCH_STAR_WARS_PLANETS_REQUEST, fetchPlanets)
  ]);
}

export default rootSaga;
