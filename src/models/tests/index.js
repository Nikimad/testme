import { createSlice } from "@reduxjs/toolkit";

const testsSlice = createSlice({
  name: "tests",
  initialState: {
    tests: [],
    meta: {
      total_count: 0,
      total_pages: 0,
    },
    is_loading: true,
  },
  reducers: {
    getTests: (state) => {
      state.is_loading = true;
      return state;
    },
    fetchSuccess: (state, { payload }) => {
      state.is_loading = false;
      state.tests = payload.tests;
      state.meta = payload.meta;
    },
    fetchReject: (state, { payload }) => {
      state.is_loading = false;
      return state;
    }
  },
});

export const testsActions = testsSlice.actions;

export default testsSlice.reducer;
