import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const isSignedInSelector = createSelector([authSelector], auth => auth.isSignedIn);
