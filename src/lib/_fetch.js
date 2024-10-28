export const methods = {
  get: "GET",
  post: "POST",
  patch: "PATCH",
  delete: "DELETE",
};

const apiURL =
  typeof window === "undefined"
    ? "https://interns-test-fe.snp.agency/api/v1"
    : "/api";

const handleOptions = (options) => ({
  ...options,
  ...(Object.hasOwn(options, "body") && {
    body: JSON.stringify(options.body),
  }),
});

const _fetch = async (method, url, headers = {}, options = {}) => {
  console.log(`${method}: ${url}`);
  const response = await fetch(`${apiURL}/${url}`, {
    method,
    credentials: "include",
    ...handleOptions(options),
    headers: {
      "Content-Type": "application/json",
      "Scope-Key": "8TSKR76EQVOX45",
      ...headers,
    },
  });

  let data;

  try {
    data = await response.json();
  } catch {
    data = { error: "Something went wrong" };
  }

  if (response.ok) return data;
  if (!response.ok) throw data;
};

const _experemental_fetch = async (
  method,
  url,
  headers = {},
  options = {}
) => {
  console.log(`${method}: ${url}`);
  const response = await fetch(`${apiURL}/${url}`, {
    method,
    credentials: "include",
    ...handleOptions(options),
    headers: {
      "Content-Type": "application/json",
      "Scope-Key": "8TSKR76EQVOX45",
      ...headers,
    },
  });

  let error = null;
  let data = null; 

  try {
    data = await response.json();
  } catch {
    error = { error: "Something went wrong" };
  }

  return [error, data];
};

export const _get = (...args) => _fetch(methods.get, ...args);
export const _post = (...args) => _fetch(methods.post, ...args);
export const _patch = (...args) => _fetch(methods.patch, ...args);
export const _delete = (...args) => _fetch(methods.delete, ...args);

export const _experemental_get = (...args) => _experemental_fetch(methods.get, ...args);
export const _experemental_post = (...args) => _experemental_fetch(methods.post, ...args);
export const _experemental_patch = (...args) => _experemental_fetch(methods.patch, ...args);
export const _experemental_delete = (...args) => _experemental_fetch(methods.delete, ...args);