import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  ({ auth }) => auth
);

export const authSelectors = {
  selectIsUserAuthorized: createSelector(rootSelector, ({ id }) => id !== null),
  selectIsLoading: createSelector(rootSelector, ({ is_loading }) => is_loading),
  selectError: createSelector(rootSelector, ({ error }) => error),
};
