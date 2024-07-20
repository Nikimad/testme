import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  ({ questions }) => questions
);

export const questionsSelectors = {
  selectQuestionsByTestId: (id) =>
    createSelector(rootSelector, ({ questions }) => questions[id]),
  selectQuestionsIdsByTestId: (id) =>
    createSelector(rootSelector, ({ questions }) =>
      questions[id].map((question) => question.id)
    ),
};
