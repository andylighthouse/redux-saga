import { call, put, take, race, all } from "redux-saga/effects";

export const FETCH_STAR_WARS_REQUEST = "FETCH_STAR_WARS_REQUEST";
export const FETCH_STAR_WARS_SUCCESS = "FETCH_STAR_WARS_SUCCESS";
export const CONFIRMATION_FETCH_REQUEST = "CONFIRMATION_FETCH_REQUEST";

const api = url => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = () => ({
  type: FETCH_STAR_WARS_REQUEST
});

export const confirmationFetchRequest = () => ({
  type: CONFIRMATION_FETCH_REQUEST
});

export function* fetchPerson(action) {
  try {
    console.log("entered");
    //block generater function until an action is dispatched with the mathching type
    yield take(CONFIRMATION_FETCH_REQUEST);
    console.log("passed");
    // //the quickest wins, need an if action to handle
    // // if use all, both will be run, all is hybrid block/nonblock
    // const { normal, custom } = yield race({
    //   normal: call(api, ""),
    //   custom: call(api, "")
    // });

    const person = yield call(api, "https://swapi.co/api/people/");

    yield put({ type: FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (e) {
    console.log(e);
  }
}
