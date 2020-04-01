import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

import authReducer from './authReducer';
import cartReducer from './cartReducer';
import directoryReducer from './directoryReducer';
import shopReducer from './shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  //  whitelist reducers we want store in localStorage
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
