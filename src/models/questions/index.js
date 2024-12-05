import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { start, reject, finish } from "../reducers";
import { defaultState } from "@/lib/defaultState";

export const questionsAdapter = createEntityAdapter();

const questionsSlice = createSlice({
  name: "questions",
  initialState: { ...defaultState.questions },
  reducers: {
    start,
    reject,
    finish,
    setQuestions: questionsAdapter.setAll,
    createQuestion: (state) => state,
    addQuestion: questionsAdapter.addOne,
    editQuestion: questionsAdapter.updateOne,
    deleteQuestion: questionsAdapter.removeOne,
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice.reducer;
