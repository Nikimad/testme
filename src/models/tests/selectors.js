import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  ({ tests }) => tests,
);

const selectQuery = createSelector(rootSelector, ({ query }) => query);
const selectTests = createSelector(rootSelector, ({ tests }) => tests);
const selectById = (testId) => createSelector(selectTests, (tests) => tests.find(({ id }) => testId == id));
const selectTestsTotal = createSelector(selectTests, (tests) => tests.length);
const selectIsLoading = createSelector(rootSelector, ({ isLoading }) => isLoading);
const selectError = createSelector(rootSelector, ({ error }) => error);
const selectMeta = createSelector(rootSelector, ({ meta }) => meta );
const selectTotalPages = createSelector(selectMeta, ({ total_pages }) => total_pages);
const selectTotalCount = createSelector(selectMeta, ({ total_count }) => total_count);

export const testsSelectors = {
  selectQuery,
  selectTests,
  selectById,
  selectTestsTotal,
  selectMeta,
  selectError,
  selectIsLoading,
  selectTotalPages,
  selectTotalCount,
};
