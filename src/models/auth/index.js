import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "guest",
    id: null,
    is_admin: false,
    is_loading: false,
    error: null,
  },
  reducers: {
    signin: (state) => {
      state.is_loading = true;
      return state;
    },
    signup: (state) => {
      state.is_loading = true;
      return state;
    },
    getUser: (state) => {
      state.is_loading = true;
      return state;
    },
    logout: (state) => state,
    fetchSuccess: (state, { payload }) => {
      state.username = payload?.username ?? "guest";
      state.id = payload?.id ?? null;
      state.is_admin = payload?.is_admin ?? false;
      state.is_loading = false;
      state.error = null;
    },
    fetchReject: (state, { payload }) => {
      state.is_loading = false;
      state.error = payload.error;
    },
    resetError: (state) => {
      state.error = null;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
