import { FETCH_STAR_WARS_PLANETS_SUCCESS } from "../actions/planets";

const initialState = {
  planets: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAR_WARS_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.data
      };
    default:
      return state;
  }
};

export default reducer;
