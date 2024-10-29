export const initialState = {
  constructor: {
    isLoading: false,
    error: null,
    id: null,
    title: "",
    questions: [],
  },
  authorization: {
    isLoading: false,
    error: null,
    user: null,
  },
  tests: {
    isLoading: false,
    error: null,
    query: null,
    tests: [],
    meta: {
      total_count: 1,
      total_pages: 1,
    },
  },
};
