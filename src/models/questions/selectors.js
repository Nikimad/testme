import { createSelector } from "@reduxjs/toolkit";
import { selectIsLoading, selectError } from "../selectors";
import { questionsAdapter } from ".";

const selectQuestionsRoot = createSelector(
  (state) => state,
  ({ questions }) => questions
);

const adapterSelectors = questionsAdapter.getSelectors(selectQuestionsRoot);

const selectAllByTestId = (id) =>
  createSelector(adapterSelectors.selectAll, (questions) =>
    questions.filter(({ testId }) => testId === id)
  );

export const questionsSelectors = {
  selectIsLoading: selectIsLoading(selectQuestionsRoot),
  selectError: selectError(selectQuestionsRoot),
  selectAllByTestId,
  ...adapterSelectors,
};
