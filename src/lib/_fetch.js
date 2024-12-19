const methods = {
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

const _fetch = async (
  method,
  url,
  headers = {},
  options = {}
) => {
  console.log(`${method}: ${apiURL}/${url}`);
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
  let cookies = response.headers.getSetCookie();
  
  try {
    const parsedRes = await response.json();
    if (response.ok) data = parsedRes;
    if (!response.ok) error = parsedRes;
  } catch {
    error = { error: "Something went wrong" };
  }

  return [error, data, cookies];
};

export const _get = async (...args) => _fetch(methods.get, ...args);
export const _post = async (...args) => _fetch(methods.post, ...args);
export const _patch = async (...args) => _fetch(methods.patch, ...args);
export const _delete = async (...args) => _fetch(methods.delete, ...args);
