"use client";

import { useAppSelector } from "@/models/hooks";
import { questionsSelectors } from "@/models/questions/selectors";
import { answersSelectors } from "@/models/answers/selectors";
import Test from "./Test";

const TestContainer = ({ test, onDelete }) => {
    const questions = useAppSelector(questionsSelectors.selectAllByTestId(test.id));
    const answers = useAppSelector(answersSelectors.selectAll);
    return <Test test={test} questions={questions} answers={answers} onDelete={onDelete} />;
}

export default TestContainer;
