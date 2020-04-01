import { call, all } from 'redux-saga/effects';
import { shopSagas } from './shop.sagas';
import { authSagas } from './auth.sagas';
import { cartSagas } from './cart.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(authSagas), call(cartSagas)]);
}
