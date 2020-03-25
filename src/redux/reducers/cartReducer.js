import * as types from '../actions/types';
import { addItemToCart, removeItemFromCart } from '../utils/cart.utils';

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case types.DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case types.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case types.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case types.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};
