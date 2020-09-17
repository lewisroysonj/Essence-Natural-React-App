const CartItemQtyReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'STOP':
            return state    
        default:
            return state
    }
}

export default CartItemQtyReducer;