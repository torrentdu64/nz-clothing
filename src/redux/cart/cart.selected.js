import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCardHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acculamatedQuantity, cartItem) => acculamatedQuantity + cartItem.quantity, 0)
)

export const selectCartToTal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acculamatedQuantity, cartItem) => acculamatedQuantity + cartItem.quantity * cartItem.price, 0)
);