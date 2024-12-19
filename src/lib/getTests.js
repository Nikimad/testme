import { cache } from "react";
import { headers } from "next/headers";
import { api } from "./api";
import normolizeData from "./normolizeData";

const getTests = cache(async (cookiesString) => {
  const url = new URL((await headers()).get("x-url"));
  const query = url.searchParams.toString();

  let testsStorage = [];
  let error = null;

  const [testsError, data] = await api.getTests({
    query,
    cookies: cookiesString,
  });

  error = testsError;

  const pathnameArr = url.pathname.split("/").filter(Boolean);
  const isTestPathname = pathnameArr.indexOf("test") === 0;
  const testId = isTestPathname
    ? Number(
        pathnameArr[pathnameArr.indexOf("test") + 1] === "edit"
          ? pathnameArr[pathnameArr.indexOf("test") + 2]
          : pathnameArr[pathnameArr.indexOf("test") + 1]
      )
    : null;
  const isTestFetched = testId && data?.tests.some(({ id }) => id == testId);

  testsStorage =
    !error && (isTestFetched || !testId) ? data.tests : testsStorage;

  if (!isTestFetched && testId) {
    const [testError, test] = await api.getTest({
      id: testId,
      cookies: cookiesString,
    });

    error = testError;

    testsStorage = !error ? [test] : testsStorage;
  }

  return {
    error,
    query: isTestFetched || !testId ? query : null,
    meta: data?.meta,
    data: normolizeData(testsStorage),
  };
});

export default getTests;
