import { takeLatest } from "redux-saga/effects";

import { fetchPerson, FETCH_STAR_WARS_REQUEST } from "../actions/starWars";

function* rootSaga() {
  yield takeLatest(FETCH_STAR_WARS_REQUEST, fetchPerson);
}

export default rootSaga;
