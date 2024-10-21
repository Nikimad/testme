import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/lib/initialState";
import { start, finish, reject } from "../reducers";

const testsSlice = createSlice({
  name: "tests",
  initialState: initialState.tests,
  reducers: {
    start,
    finish,
    reject,
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    getTests: (state) => state,
    getTest: (state) => state,
    success: (state, { payload: { action, ...data } }) => {
      if (action === "getTests") {
        state.meta = data.meta;
        state.tests =
          data.tests.length > 0 || data.isReset ? data.tests : state.tests;
      }
      if (
        action === "getTest" &&
        !state.tests.find(({ id }) => id === data.id)
      ) {
        state.tests = [...state.tests, data];
      }
      state.error = null;
    },
  },
});

export const testsActions = testsSlice.actions;

export default testsSlice.reducer;
