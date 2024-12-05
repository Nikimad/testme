const normolizeData = (tests) =>
  tests.reduce(
    (acc, { questions, ...test }) => {
      acc.tests.entities[test.id] = test;
      acc.tests.ids = [...acc.tests.ids, test.id];
      acc.tests.all = [...acc.tests.all, test];

      const questionsData = questions.reduce(
        (questionsDataAcc, { answers, ...question }) => {
          const questionData = {
            testId: test.id,
            ...question,
          };
          acc.questions.entities[question.id] = questionData;
          questionsDataAcc.ids = [...questionsDataAcc.ids, question.id];
          questionsDataAcc.all = [...questionsDataAcc.all, questionData];

          const answersData = answers.reduce(
            (answersDataAcc, answer) => {
              const answerData = {
                questionId: question.id,
                ...answer,
              };
              acc.answers.entities[answer.id] = answerData;
              answersDataAcc.ids = [...answersDataAcc.ids, answer.id];
              answersDataAcc.all = [...answersDataAcc.all, answerData];
              return answersDataAcc;
            },
            { ids: [], all: [] }
          );

          acc.answers.ids = [...acc.answers.ids, ...answersData.ids];
          acc.answers.all = [...acc.answers.all, ...answersData.all];

          return questionsDataAcc;
        },
        { ids: [], all: [] }
      );

      acc.questions.ids = [...acc.questions.ids, ...questionsData.ids];
      acc.questions.all = [...acc.questions.all, ...questionsData.all];

      return acc;
    },
    {
      tests: {
        entities: {},
        ids: [],
        all: [],
      },
      questions: {
        entities: {},
        ids: [],
        all: [],
      },
      answers: {
        entities: {},
        ids: [],
        all: [],
      },
    }
  );

export default normolizeData;
