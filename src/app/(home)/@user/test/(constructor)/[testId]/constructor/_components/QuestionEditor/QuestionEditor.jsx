"use client";

import { useState } from "react";
import QuestionField from "../QuestionField";

const QuestionEditor = () => {
  const [isQuestionCreated] = useState(false);

  return <QuestionField name="question" />;
};

export default QuestionEditor;
