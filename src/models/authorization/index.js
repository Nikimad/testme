import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/lib/initialState";
import { start, finish, reject } from "../reducers";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialState.authorization,
  reducers: {
    start,
    finish,
    reject,
    signin: (state) => state,
    signup: (state) => state,
    logout: (state) => state,
    success: (state, { payload }) => {
      state.user = payload;
      state.error = null;
    },
  },
});

export const authorizationActions = authorizationSlice.actions;

export default authorizationSlice.reducer;
