import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} from '../actions/types';

import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInError, signOutError, signOutSuccess, signUpError, signUpSuccess } from '../actions';

function* signIn(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInError(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutError(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield call(signIn, userAuth);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

function* signUp({ payload }) {
  try {
    const { password, confirmPassword, email, ...otherUserProps } = payload;

    if (password !== confirmPassword) {
      throw new Error('Password and confirm password do not match!');
    }

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDocument, user, otherUserProps);
    yield put(signUpSuccess({ user, additionalData: { ...otherUserProps } }));
  } catch (error) {
    yield put(signUpError(error.message));
  }
}

function* signInAfterSignUp({
  payload: {
    user,
    additionalData: { displayName }
  }
}) {
  try {
    yield put(signInSuccess({ id: user.uid, displayName }));
  } catch (error) {
    yield put(signInError(error.message));
  }
}

//  check user session if he is signed in or signed out
function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

//  Google singin
function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(signIn, user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

//  Email and Password signin
function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(signIn, user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

//  Signout
function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

//  Signup
function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

//  SignIn after signUp
function* onSignUpSignIn() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* authSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSignIn)
  ]);
}
