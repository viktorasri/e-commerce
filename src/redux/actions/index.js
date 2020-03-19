import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
  SIGN_IN,
  SIGN_OUT,
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_FROM_CART,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR
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

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsError = errorMessage => {
  return {
    type: FETCH_COLLECTIONS_ERROR,
    payload: errorMessage
  };
};

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(dispatch(fetchCollectionsSuccess(collectionsMap)));
    })
    .catch(error => dispatch(fetchCollectionsError(error.message)));
};
