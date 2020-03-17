import {
  SIGN_IN,
  SIGN_OUT,
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_FROM_CART,
  GET_COLLECTIONS
} from './types';

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
    type: ADD_ITEM_TO_CART,
    payload: item
  };
};

export const removeFromCart = item => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  };
};

export const deleteFromCart = item => {
  return {
    type: DELETE_FROM_CART,
    payload: item
  };
};

export const getCollections = collectionMap => {
  return {
    type: GET_COLLECTIONS,
    payload: collectionMap
  };
};
