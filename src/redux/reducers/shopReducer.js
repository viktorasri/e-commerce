import { GET_COLLECTIONS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
