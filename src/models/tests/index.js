import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { defaultState } from "@/lib/defaultState";
import { start, finish, reject } from "../reducers";

export const testsAdapter = createEntityAdapter();

const testsSlice = createSlice({
  name: "tests",
  initialState: { ...defaultState.tests },
  reducers: {
    start,
    finish,
    reject,
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    getTests: (state) => {
      state.error = null;
      return state
    },
    getTest: (state) => state,
    setTests: (state, { payload }) => {
      state.meta = payload.meta;
      testsAdapter.setAll(state, payload.tests);
    },
    createTest: (state) => state,
    editTest: testsAdapter.updateOne,
    addTest: (state, { payload }) => {
      state.query = null;
      testsAdapter.addOne(state, payload);
    },
    deleteTest: (state, action) => {
      state.query = null;
      testsAdapter.removeOne(state, action);
    },
  },
});

export const testsActions = testsSlice.actions;

export default testsSlice.reducer;
