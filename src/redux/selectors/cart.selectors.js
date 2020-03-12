import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector([cartSelector], cart => cart.cartItems);

export const isHiddenSelector = createSelector([cartSelector], cart => cart.isHidden);

export const quantitySelector = createSelector([cartItemsSelector], cartItems =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
