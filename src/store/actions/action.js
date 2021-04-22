
export function addToCart(info, qte) {
    return {
        type: 'ADD_TO_CART',
        info,
        qte
    }
}
export function removeFromCartAction(index) {
    return {
        type: 'REMOVE_FROM_CART',
        index
    }
}
export function removeFromCart(index) {
    return (dispatch) => {
        dispatch(removeFromCartAction(index));
    };
    
}