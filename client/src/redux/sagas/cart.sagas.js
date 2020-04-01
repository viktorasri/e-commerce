import { takeLatest, put, call, all } from 'redux-saga/effects';

import { clearCart } from '../actions';
import { SIGN_OUT_SUCCESS } from '../actions/types';

function* onSingOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* cartSagas() {
  yield all([call(onSingOutSuccess)]);
}
