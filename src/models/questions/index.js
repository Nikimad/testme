import { createSlice } from "@reduxjs/toolkit";
import { testsActions } from "../tests";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: {},
  },
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(testsActions.fetchSuccess, (state, { payload }) => {
      if (payload.meta) {
        state.questions = {
          ...state.questions,
          ...payload.tests.reduce((newState, { id, questions }) => {
            newState[id] = questions;
            return newState;
          }, {}),
        };
      }
      if (!payload.meta) {
        state.questions = {
          ...state.questions,
          [payload.id]: payload.questions,
        };
      }
    }),
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice.reducer;
