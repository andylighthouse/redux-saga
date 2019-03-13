import { combineReducers } from "redux";

import starWars from "./starWars";
import planets from "./planets";

export default combineReducers({
  starWars,
  planets
});
