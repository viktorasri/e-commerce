import { TOGGLE_CART_DROPDOWN, ADD_TO_CART } from '../actions/types';
import { addItemToCart } from './cartReducer.utils';

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
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
