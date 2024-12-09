"use client";

import { useCallback, useState } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import Answer from "./Answer";
import insert from "@/lib/insert";
import { answersActions } from "@/models/answers";
import { useContext } from "react";
import DndContext from "@/context/DndContext";

const AnswerContainer = ({ id, answerId, position }) => {
  const {
    values: { answers },
    status: { questionId },
    setFieldValue,
    setFieldError,
  } = useFormikContext();

  const answer = answers[position];

  const { dragIndex, dropIndex, onDragStart, onDragEnter, onDragEnd } =
    useContext(DndContext);

  const [isEdit, setIsEdit] = useState(false);

  const insertAnswer = useAction(answersActions.insertAnswer);
  const deleteAnswer = useAction(answersActions.deleteAnswer);

  const handleEdit = useCallback(() => isEdit || setIsEdit(true), [isEdit]);
  const handleFinish = useCallback(() => isEdit && setIsEdit(false), [isEdit]);

  const handleDeleteAnswer = useCallback(() => {
    if (questionId && answer.is_right) {
      const rightAnswersCount = answers.filter(
        ({ is_right }) => is_right
      ).length;
      if (rightAnswersCount <= 1)
        return setFieldError(
          "answers",
          "Question must have atleast one right answer"
        );
    }
    setFieldValue(
      "answers",
      answers.filter((_, i) => position !== i)
    );
    answerId && deleteAnswer({ questionId, answerId });
  }, [
    answers,
    questionId,
    answerId,
    answer,
    position,
    deleteAnswer,
    setFieldError,
    setFieldValue,
  ]);

  const handleDragStart = useCallback(
    () => onDragStart(position),
    [position, onDragStart]
  );

  const handleDragEnter = useCallback(
    () => onDragEnter(position),
    [position, onDragEnter]
  );

  const handleDragEnd = useCallback(
    (position) => {
      if (
        (dragIndex !== dropIndex && dropIndex !== null) ||
        (dragIndex !== position && typeof position === "number")
      ) {
        answerId &&
          insertAnswer({
            questionId,
            answerId,
            from: dragIndex,
            position: dropIndex !== null ? dropIndex : position,
          });
        setFieldValue(
          "answers",
          insert(answers, dragIndex, dropIndex !== null ? dropIndex : position)
        );
      }
      onDragEnd();
    },
    [
      dragIndex,
      dropIndex,
      answers,
      questionId,
      answerId,
      onDragEnd,
      insertAnswer,
      setFieldValue,
    ]
  );

  const handleDropClick = useCallback(
    () => handleDragEnd(position),
    [position, handleDragEnd]
  );

  return (
    <Answer
      id={id}
      answerId={answerId}
      position={position}
      answer={answer}
      isRight={answer.is_right}
      isActive={dragIndex !== null}
      isSelect={dragIndex === position}
      isTarget={dropIndex === position}
      isEdit={isEdit}
      onClick={handleEdit}
      onEditFinish={handleFinish}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      onDropClick={handleDropClick}
      onDelete={handleDeleteAnswer}
    />
  );
};

export default AnswerContainer;
