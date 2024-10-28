import { createSelector } from "@reduxjs/toolkit";

const selectConstructor = createSelector(
  (state) => state,
  ({ constructor }) => constructor,
);


const selectIsLoading = createSelector(selectConstructor, ({ isLoading }) => isLoading);
const selectTest = createSelector(selectConstructor, ({ id, title }) => ({ id, title }));
const selectQuestions = createSelector(selectConstructor, ({ questions }) => questions);

export const constructorSelectors = {
  selectIsLoading,
  selectTest,
  selectQuestions
}; 