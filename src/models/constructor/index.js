import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  status: "create",
  id: null,
  title: "",
  questions: [],
};

const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    addTest: (state) => state,
    editTest: (state, { payload }) => {
      state.title = payload.title;
    },
    deleteTest: (state) => {
      for (const key in initialState) {
        state[key] = initialState[key];
      }
    },
    addTestSuccess: (state, { payload }) => {
      state.status = "edit";
      state.title = payload.title;
      state.id = payload.id;
      state.questions = payload.questions;
    },
    addQuestion: (state) => state,
    editQuestion: (state, { payload }) => {
      state.questions = state.questions.map((question) => {
        return question.id === payload.id ? { ...question, ...payload.body} : question;
      });
    },
    addQuestionSuccess: (state, { payload }) => {
      state.questions = [...state.questions, payload];
    },
    deleteQuestion: (state, { payload }) => {
      state.questions = state.questions.filter(({ id }) => id !== payload); 
      return state;
    },
    reset: (state) => {
      for (const key in initialState) {
        state[key] = initialState[key];
      }
    },
    start: (state) => {
      state.isLoading = true;
    },
    reject: (state, { payload }) => {
      state.error = payload;
    },
    finish: (state) => {
      state.isLoading = false;
    },
  },
});

export const constructorActions = constructorSlice.actions;

export default constructorSlice.reducer;
