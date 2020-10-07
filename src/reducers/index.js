/** @format */

import burgerNavReducer from "./burgerOpen";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  burgerToggle: burgerNavReducer,
});

export default allReducers;
