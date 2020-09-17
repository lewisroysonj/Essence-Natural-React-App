import CartItemQtyReducer from './cartItemqty';
import LoggedReducer from './isLogged';
import burgerNavReducer from './burgerOpen';
import {
    combineReducers
} from 'redux';

const allReducers = combineReducers({
    cartItemQty: CartItemQtyReducer,
    isLogged: LoggedReducer,
    burgerToggle: burgerNavReducer
})

export default allReducers;