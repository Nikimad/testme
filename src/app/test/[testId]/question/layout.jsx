"use client";

import { useParams } from "next/navigation";
import QuestionsNav from "@/components/QuestionsNav";
import StyledContainer from "@/components/StyledContainer";
import Button from "@/components/Button";

const QuestionLayout = ({ children }) => {
  const { testId, questionId } = useParams();
  const questionsIds = Array.from({ length: 40 }, (_, i) => (i += 1));
  const nextQuestionId =
    questionsIds[questionsIds.indexOf(Number(questionId)) + 1];
  const nextHref = nextQuestionId ?? `/test/${testId}/result`;

  return (
    <>
      <QuestionsNav questionsIds={questionsIds} />
      <StyledContainer>
        {children}
        <Button
          href={nextHref}
          linkAction="push"
        >
          Next
        </Button>
      </StyledContainer>
    </>
  );
};

export default QuestionLayout;
