import { SIGN_IN, SIGN_OUT, TOGGLE_CART_DROPDOWN, ADD_TO_CART } from './types';

export const signIn = user => {
  return {
    type: SIGN_IN,
    payload: user
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const toggleCartDropdown = () => {
  return {
    type: TOGGLE_CART_DROPDOWN
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};