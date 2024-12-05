"use server";

import { cookies } from "next/headers";
import { defaultState } from "./defaultState";
import getUser from "./getUser";
import getTests from "./getTests";

const getInitialState = async () => {
  const cookiesString = cookies().toString();

  const initialState = {
    authorization: { ...defaultState.authorization },
    tests: { ...defaultState.tests },
    questions: { ...defaultState.questions },
    answers: { ...defaultState.answers },
  };

  const user = await getUser(cookiesString);

  if (user) {
    initialState.authorization.user = user;

    const { error, query, meta, data } = await getTests(cookiesString);

    initialState.tests.error = error
    initialState.tests.query = query;
    initialState.tests.meta = meta || initialState.tests.meta;
    initialState.tests.entities = data.tests.entities;
    initialState.tests.ids = data.tests.ids;
    initialState.questions.entities = data.questions.entities;
    initialState.questions.ids = data.questions.ids;
    initialState.answers.entities = data.answers.entities;
    initialState.answers.ids = data.answers.ids;
  }

  return initialState;
};

export default getInitialState;
