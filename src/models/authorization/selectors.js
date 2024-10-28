import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  ({ authorization }) => authorization
);

export const authorizationSelectors = {
  selectIsLoading: createSelector(rootSelector, ({ isLoading }) => isLoading),
  selectError: createSelector(rootSelector, ({ error }) => error),
  selectIsUserAuthorized: createSelector(rootSelector, ({ user }) => !!user),
  selecIsUserAdmin: createSelector(rootSelector, ({ user }) => !!user.is_admin),
};
