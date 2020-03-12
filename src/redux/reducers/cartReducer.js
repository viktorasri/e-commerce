import { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART, DELETE_FROM_CART, REMOVE_ITEM_FROM_CART } from '../actions/types';
import { addItemToCart, removeItemFromCart } from '../utils/cart.utils';

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id != action.payload.id)
      };
    default:
      return state;
  }
};
