import { createSelector } from "@reduxjs/toolkit";

const selectUi = (state) => state.ui;

const makeSelectUiIsRequestInProcess = () =>
  createSelector(selectUi, (subState) => subState.isRequestInProcess);

export { selectUi, makeSelectUiIsRequestInProcess };
