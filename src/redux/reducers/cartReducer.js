import { TOGGLE_CART_DROPDOWN } from '../actions/types';

const INITIAL_STATE = {
  isHidden: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    default:
      return state;
  }
};
