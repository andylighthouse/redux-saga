import {
  call,
  put,
  take,
  race,
  all,
  select,
  throttle,
  fork,
  spawn,
  cancel
} from "redux-saga/effects";

export const FETCH_STAR_WARS_REQUEST = "FETCH_STAR_WARS_REQUEST";
export const FETCH_STAR_WARS_SUCCESS = "FETCH_STAR_WARS_SUCCESS";
export const CONFIRMATION_FETCH_REQUEST = "CONFIRMATION_FETCH_REQUEST";

export const api = url => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = () => ({
  type: FETCH_STAR_WARS_REQUEST
});

export const confirmationFetchRequest = () => ({
  type: CONFIRMATION_FETCH_REQUEST
});

export function* fetchPerson(action) {
  try {
    //block generater function until an action is dispatched with the mathching type
    yield take(CONFIRMATION_FETCH_REQUEST);

    // //the quickest wins, need an if action to handle
    // // if use all, both will be run, all is hybrid block/nonblock
    // const { normal, custom } = yield race({
    //   normal: call(api, ""),
    //   custom: call(api, "")
    // });

    //Creates an effect that instructs the middleware to invoke the provided selector on the current Store's state
    const selector = yield select(state => state.starWars);

    const person = yield call(api, "https://swapi.co/api/people/");

    yield put({ type: FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (e) {
    console.log(e);
  }
}

//block
//call, take, race

//nonblock
//put throttle fork spawn cancel select

//all can be both
