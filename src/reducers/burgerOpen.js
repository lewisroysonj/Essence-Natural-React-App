

const burgerNavReducer = (burgerOpen = false, action) => {
    switch (action.type) {
        case 'burgerToggle':
            return !burgerOpen
        default:
            return burgerOpen
    }
}

export default burgerNavReducer;