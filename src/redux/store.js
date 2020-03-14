import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from './reducers';

const middlewares = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

//  Store redux state into localStorage
export const persistor = persistStore(store);
export default { store, persistor };
