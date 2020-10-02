export const addCart = (data) => {
    return {
        type: 'ADD_CART',
        payload: data
    }
}

export const deleteCart = (id) => {
    return {
        type: 'DELETE_CART',
        payload: id
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export const addProduct = (data) => {
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export const addUser = (data) => {
    return {
        type: 'ADD_USER',
        payload: data
    }
}