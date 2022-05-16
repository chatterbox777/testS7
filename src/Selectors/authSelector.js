import { createSelector } from "@reduxjs/toolkit";

const selectAuth = (state) => state.auth;

const makeSelectIsAuth = () =>
  createSelector(selectAuth, (subState) => subState.isAuth);
const makeSelectUser = () =>
  createSelector(selectAuth, (subState) => subState.user);
export { selectAuth, makeSelectIsAuth, makeSelectUser };
