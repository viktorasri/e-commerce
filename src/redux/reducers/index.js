import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

import authReducer from './authReducer';
import cartReducer from './cartReducer';

const persistConfig = {
  key: 'root',
  storage,
  //  whitelist reducers we want store in localStorage
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
