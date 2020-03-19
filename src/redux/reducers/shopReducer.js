import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_ERROR } from '../actions/types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
