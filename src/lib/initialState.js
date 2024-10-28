export const initialState = {
  constructor: {
    isLoading: false,
    error: null,
    id: null,
    title: "",
    questions: [],
  },
  authorization: {
    user: null,
    isLoading: false,
    error: null,
  },
  tests: {
    query: null,
    tests: [],
    meta: {
      total_count: 1,
      total_pages: 1,
    },
    isLoading: false,
    error: null,
  },
};
