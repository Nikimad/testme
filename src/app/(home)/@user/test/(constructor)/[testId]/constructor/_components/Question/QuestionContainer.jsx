import { useCallback, useState } from "react";
import Question from "./Question";

const QuestionContainer = ({ name, index, question }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit= useCallback(() => {
    if (!isEdit) setIsEdit(true);
  }, [isEdit]);

  const handleFinish = useCallback(() => {
    if (isEdit) setIsEdit(false);
  }, [isEdit]);

  return (
    <Question
      name={name}
      index={index}
      question={question}
      isEdit={isEdit}
      onEdit={handleEdit}
      onFinish={handleFinish}
    />
  );
};

export default QuestionContainer;
