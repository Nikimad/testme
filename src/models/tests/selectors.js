import { createSelector } from "@reduxjs/toolkit";
import { selectIsLoading, selectError } from "../selectors";
import { testsAdapter } from ".";

const testsRootSelector = createSelector(
  (state) => state,
  ({ tests }) => tests
);
const adapterSelectors = testsAdapter.getSelectors(testsRootSelector);

const selectQuery = createSelector(testsRootSelector, ({ query }) => query);
const selectMeta = createSelector(testsRootSelector, ({ meta }) => meta);
const selectTotalPages = createSelector(
  selectMeta,
  ({ total_pages }) => total_pages
);
const selectTotalCount = createSelector(
  selectMeta,
  ({ total_count }) => total_count
);

export const testsSelectors = {
  selectQuery,
  selectMeta,
  selectTotalPages,
  selectTotalCount,
  selectError: selectError(testsRootSelector),
  selectIsLoading: selectIsLoading(testsRootSelector),
  ...adapterSelectors,
};
