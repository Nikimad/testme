export const defaultState = {
  authorization: {
    isLoading: false,
    error: null,
    user: null,
  },
  tests: {
    isLoading: false,
    error: null,
    query: null,
    entities: {},
    ids: [],
    meta: {
      total_count: 1,
      total_pages: 1,
    },
  },
  questions: {
    entities: {},
    ids: [],
    isLoading: false,
    error: null,
  },
  answers: {
    entities: {},
    ids: [],
    isLoading: false,
    error: null,
  }
};
