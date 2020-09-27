/** @format */

import CartItemQtyReducer from "./cartItemqty";
import LoggedReducer from "./isLogged";
import burgerNavReducer from "./burgerOpen";
import getProductDetails from "./getProductDetails";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cartItemQty: CartItemQtyReducer,
  isLogged: LoggedReducer,
  burgerToggle: burgerNavReducer,
  getProductDetails: getProductDetails,
});

export default allReducers;
