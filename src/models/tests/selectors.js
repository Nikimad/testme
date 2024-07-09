import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  ({ tests }) => tests
);

export const testsSelectors = {
  selectTests: createSelector(rootSelector, ({ tests }) => tests),
  selectMeta: createSelector(rootSelector, ({ meta }) => meta),
  selectIsLoading: createSelector(rootSelector, ({ is_loading }) => is_loading),
};