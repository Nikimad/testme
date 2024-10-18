import { _get, _post, _patch, _delete } from "./_fetch";

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
