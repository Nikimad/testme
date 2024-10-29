import { _get, _post, _patch, _delete } from "./_fetch";
import {
  _experemental_get,
  _experemental_post,
  _experemental_patch,
  _experemental_delete,
} from "./_fetch";

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

export const authorization = {
  logout: () => _delete(authorizationEndpoints.logout),
  signup: (body) => _post(authorizationEndpoints.signup, {}, { body }),
  signin: (body) => _post(authorizationEndpoints.signin, {}, { body }),
  getUser: (cookies) =>
    _get(authorizationEndpoints.getUser, { Cookie: cookies }),
};

export const tests = {
  getTests: ({ query, cookies }) =>
    _get(`${testsEndpoints.get}${query && `?${query}`}`, {
      Cookie: cookies,
    }),
  getTest: ({ id, cookies }) =>
    _get(`${testsEndpoints.get}/${id}`, {
      Cookie: cookies,
    }),
};

export const constructor = {
  addTest: (body) => _experemental_post(endpoints.tests, {}, { body }),
  editTest: ({ id, ...body }) =>
    _experemental_patch(`${endpoints.tests}/${id}`, {}, { body }),
  deleteTest: (id) => _experemental_delete(`${endpoints.tests}/${id}`),
  addQuestion: ({ id, body }) =>
    _experemental_post(
      `${endpoints.tests}/${id}/${endpoints.questions}`,
      {},
      { body }
    ),
  editQuestion: ({ id, body }) =>
    _experemental_patch(`${endpoints.questions}/${id}`, {}, { body }),
  deleteQuestion: (id) => _experemental_delete(`${endpoints.questions}/${id}`),
};
