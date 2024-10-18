import { cookies, headers } from "next/headers";
import { authorization, tests } from "@/lib/api";
import { initialState as defaultState } from "./initialState";

const getInitialState = async () => {
  const url = new URL(headers().get("x-url"));
  const pathnameArr = url.pathname.split("/").filter(Boolean);

  const testId = pathnameArr[pathnameArr.indexOf("test") + 1];
  const query = url.searchParams.toString();
  const cookiesString = cookies().toString();

  const initialState = { ...defaultState };

  try {
    const user = await authorization.getUser(cookiesString);
    initialState.authorization.user = user;
  } catch {}

  if (initialState.authorization.user) {
    try {
      if (testId) {
        const test = await tests.getTest({ id: testId, cookies: cookiesString });
        initialState.tests.tests = [test];
      }
      if (!testId) {
        initialState.tests.query = query;
        const data = await tests.getTests({ query, cookies: cookiesString });
        initialState.tests.meta = data.meta;
        initialState.tests.tests = data.tests;
      }
    } catch ({ error }) {
      initialState.tests.error = error;
    }
  }

  return initialState;
};

export default getInitialState;
