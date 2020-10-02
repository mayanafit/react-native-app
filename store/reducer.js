const initState = {
    products: [],
    carts: [],
    users: []
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_PRODUCTS": 
            return {
                ...state, products: action.payload
            }
        case "DELETE_PRODUCT": 
        return {
            ...state, products: state.products.filter(product => product.id !== action.payload)
        } 
        case "ADD_PRODUCT": 
            return {
                ...state, products: state.products.concat(action.payload)
            } 
        case "ADD_CART": 
            return {
                ...state, carts: state.carts.concat(action.payload)
            } 
        case "DELETE_CART": 
        return {
            ...state, carts: state.carts.filter(cart => cart.id !== action.payload)
        } 
        case "ADD_USER": 
            return {
                ...state, users: state.users.concat(action.payload)
            } 
        default:
            return state
    }
}

export default mainReducer