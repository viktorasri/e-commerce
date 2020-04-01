import * as types from './types';

//  Authentication actions
export const googleSignInStart = () => {
  return {
    type: types.GOOGLE_SIGN_IN_START
  };
};

export const emailSignInStart = userMailAndPassword => {
  return {
    type: types.EMAIL_SIGN_IN_START,
    payload: userMailAndPassword
  };
};

export const signInSuccess = user => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: user
  };
};

export const signInError = errorMessage => {
  return {
    type: types.SIGN_IN_ERROR,
    payload: errorMessage
  };
};

export const checkUserSession = () => {
  return {
    type: types.CHECK_USER_SESSION
  };
};

export const signOutStart = () => {
  return {
    type: types.SIGN_OUT_START
  };
};

export const signOutSuccess = () => {
  return {
    type: types.SIGN_OUT_SUCCESS
  };
};

export const signOutError = errorMessage => {
  return {
    type: types.SIGN_OUT_START,
    payload: errorMessage
  };
};

export const signUpStart = userData => {
  return {
    type: types.SIGN_UP_START,
    payload: userData
  };
};

export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  };
};

export const signUpError = errorMessage => {
  return {
    type: types.SIGN_UP_ERROR,
    payload: errorMessage
  };
};

//  Cart actions
export const toggleCartDropdown = () => {
  return {
    type: types.TOGGLE_CART_DROPDOWN
  };
};

export const addToCart = item => {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: item
  };
};

export const deleteCartItems = item => {
  console.log(item);
  return {
    type: types.DELETE_FROM_CART,
    payload: item
  };
};

export const removeFromCart = item => {
  return {
    type: types.REMOVE_ITEM_FROM_CART,
    payload: item
  };
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  };
};

//  Shop actions
export const fetchCollectionsStart = () => {
  return {
    type: types.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: types.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsError = errorMessage => {
  return {
    type: types.FETCH_COLLECTIONS_ERROR,
    payload: errorMessage
  };
};
