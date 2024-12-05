import { _get, _post, _patch, _delete } from "./_fetch";

const endpoints = {
  signin: "signin",
  signup: "signup",
  logout: "logout",
  getUser: "users/current",
  tests: "tests",
  questions: "questions",
  answers: "answers",
};

export const authorizationEndpoints = {
  signin: "signin",
  signup: "signup",
  logout: "logout",
  getUser: "users/current",
};

export const testsEndpoints = {
  get: "tests",
};

/*
export const authorization = {
  logout: () => _experemental_delete(authorizationEndpoints.logout),
  signup: (body) =>
    _experemental_post(authorizationEndpoints.signup, {}, { body }),
  signin: (body) =>
    _experemental_post(authorizationEndpoints.signin, {}, { body }),
  getUser: (cookies) =>
    _experemental_get(authorizationEndpoints.getUser, { Cookie: cookies }),
};

export const tests = {
  getTests: ({ query, cookies }) =>
    _experemental_get(`${testsEndpoints.get}${query && `?${query}`}`, {
      Cookie: cookies,
    }),
  getTest: ({ id, cookies }) =>
    _get(`${testsEndpoints.get}/${id}`, {
      Cookie: cookies,
    }),
  ex_getTests: ({ query, cookies }) =>
    _experemental_get(`${testsEndpoints.get}${query && `?${query}`}`, {
      Cookie: cookies,
    }),
  ex_getTest: ({ id, cookies }) =>
    _experemental_get(`${testsEndpoints.get}/${id}`, {
      Cookie: cookies,
    }),
};

export const constructor = {
  createTest: (test) => _experemental_post(endpoints.tests, {}, { body: test }),
  addTest: (test) => _experemental_post(endpoints.tests, {}, { body: test }),
  editTest: ({ id, test }) =>
    _experemental_patch(`${endpoints.tests}/${id}`, {}, { body: test }),
  deleteTest: (testId) => _experemental_delete(`${endpoints.tests}/${testId}`),
  createQuestion: ({ testId, ...question }) =>
    _experemental_post(
      `${endpoints.tests}/${testId}/${endpoints.questions}`,
      {},
      { body: question }
    ),
  addQuestion: ({ testId, question }) =>
    _experemental_post(
      `${endpoints.tests}/${testId}/${endpoints.questions}`,
      {},
      { body: question }
    ),
  editQuestion: (question) =>
    _experemental_patch(
      `${endpoints.questions}/${question.id}`,
      {},
      { body: question }
    ),
  deleteQuestion: (questionId) =>
    _experemental_delete(`${endpoints.questions}/${questionId}`),
  createAnswer: ({ questionId, answer }) =>
    _experemental_post(
      `${endpoints.questions}/${questionId}/${endpoints.answers}`,
      {},
      { body: answer }
    ),
  addAnswer: ({ questionId, answer }) =>
    _experemental_post(
      `${endpoints.questions}/${questionId}/${endpoints.answers}`,
      {},
      { body: answer }
    ),
  editAnswer: ({ answerId, answer }) =>
    _experemental_patch(
      `${endpoints.answers}/${answerId}`,
      {},
      { body: answer }
    ),
  insertAnswer: ({ answerId, position }) =>
    _experemental_patch(
      `${endpoints.answers}/${answerId}/insert_at/${position}`
    ),
  deleteAnswer: (answerId) =>
    _experemental_delete(`${endpoints.answers}/${answerId}`),
};
*/
export const api = {
  logout: () => _delete(authorizationEndpoints.logout),
  signup: (body) => _post(authorizationEndpoints.signup, {}, { body }),
  signin: (body) => _post(authorizationEndpoints.signin, {}, { body }),
  getUser: (cookies) =>
    _get(authorizationEndpoints.getUser, { Cookie: cookies }),
  getTests: ({ query, cookies }) =>
    _get(`${testsEndpoints.get}${query && `?${query}`}`, {
      Cookie: cookies,
    }),
  getTest: ({ id, cookies }) =>
    _get(`${testsEndpoints.get}/${id}`, {
      Cookie: cookies,
    }),
  createTest: (test) => _post(endpoints.tests, {}, { body: test }),
  editTest: ({ id, test }) =>
    _patch(`${endpoints.tests}/${id}`, {}, { body: test }),
  deleteTest: (testId) => _delete(`${endpoints.tests}/${testId}`),
  createQuestion: ({ testId, ...question }) =>
    _post(
      `${endpoints.tests}/${testId}/${endpoints.questions}`,
      {},
      { body: question }
    ),
  addQuestion: ({ testId, question }) =>
    _post(
      `${endpoints.tests}/${testId}/${endpoints.questions}`,
      {},
      { body: question }
    ),
  editQuestion: (question) =>
    _patch(`${endpoints.questions}/${question.id}`, {}, { body: question }),
  deleteQuestion: (questionId) =>
    _delete(`${endpoints.questions}/${questionId}`),
  createAnswer: ({ questionId, answer }) =>
    _post(
      `${endpoints.questions}/${questionId}/${endpoints.answers}`,
      {},
      { body: answer }
    ),
  editAnswer: ({ answerId, answer }) =>
    _patch(`${endpoints.answers}/${answerId}`, {}, { body: answer }),
  insertAnswer: ({ answerId, position }) =>
    _patch(`${endpoints.answers}/${answerId}/insert_at/${position}`),
  deleteAnswer: (answerId) => _delete(`${endpoints.answers}/${answerId}`),
};
