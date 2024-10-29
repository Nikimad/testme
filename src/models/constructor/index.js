import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/lib/initialState";
import { start, reject, finish } from "../reducers";

const constructorSlice = createSlice({
  name: "constructor",
  initialState: initialState.constructor,
  reducers: {
    start,
    reject,
    finish,
    addTest: (state) => state,
    addTestSuccess: (state, { payload }) => {
      state.title = payload.title;
      state.id = payload.id;
      state.questions = payload.questions;
    },
    editTest: (state, { payload }) => {
      state.title = payload.title;
    },
    deleteTest: () => initialState.constructor,
    addQuestion: (state) => state,
    addQuestionSuccess: (state, { payload }) => {
      state.questions = [...state.questions, payload];
    },
    editQuestion: (state, { payload }) => {
      state.questions = state.questions.map((question) => {
        return question.id === payload.id
          ? { ...question, ...payload.body }
          : question;
      });
    },
    deleteQuestion: (state, { payload }) => {
      state.questions = state.questions.filter(({ id }) => id !== payload);
    },
  },
});

export const constructorActions = constructorSlice.actions;

export default constructorSlice.reducer;
