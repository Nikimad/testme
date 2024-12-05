import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "@/lib/defaultState";
import { start, finish, reject } from "../reducers";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: { ...defaultState.authorization },
  reducers: {
    start,
    finish,
    reject,
    signin: (state) => state,
    signup: (state) => state,
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
      state.error = null;
    },
  },
});

export const authorizationActions = authorizationSlice.actions;

export default authorizationSlice.reducer;
