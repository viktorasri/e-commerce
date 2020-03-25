import * as types from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  currentUser: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GOOGLE_SIGN_IN_START:
    case types.EMAIL_SIGN_IN_START:
    case types.SIGN_OUT_START:
    case types.SIGN_UP_START:
      return {
        ...state
      };
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isSignedIn: true,
        error: ''
      };
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isSignedIn: false,
        error: ''
      };
    case types.SIGN_IN_ERROR:
    case types.SIGN_OUT_ERROR:
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case types.SIGN_UP_START:
      return {
        ...state
      };
    default:
      return state;
  }
};
