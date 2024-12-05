import { createSelector } from "@reduxjs/toolkit";
import { selectIsLoading, selectError } from "../selectors";
import { answersAdapter } from ".";

const selectAnswersRoot = createSelector(
  (state) => state,
  ({ answers }) => answers
);

const adapterSelectors = answersAdapter.getSelectors(selectAnswersRoot);

const selectAllByQuestionId = (id) =>
  createSelector(adapterSelectors.selectAll, (answers) =>
    answers.filter(({ questionId }) => questionId === id)
  );

export const answersSelectors = {
  selectIsLoading: selectIsLoading(selectAnswersRoot),
  selectError: selectError(selectAnswersRoot),
  selectAllByQuestionId,
  ...adapterSelectors,
};
