export const CART = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART'
}


export const addToCart = id => {
    return {
        type: CART.ADD_TO_CART, id
    }
}

export const removeFromCart = id => {
    return {
        type: CART.REMOVE_FROM_CART,
        id,
    }
};
