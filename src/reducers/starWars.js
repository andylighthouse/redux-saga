import { FETCH_STAR_WARS_SUCCESS } from "../actions/starWars";

const initialState = {
  people: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAR_WARS_SUCCESS:
      return {
        ...state,
        people: action.data
      };
    default:
      return state;
  }
};

export default reducer;
