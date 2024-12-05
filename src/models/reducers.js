export const start = (state) => {
  state.isLoading = true;
};
export const finish = (state) => {
  state.isLoading = false;
};
export const reject = (state, { payload }) => {
  state.error = payload?.error ?? payload;
};
