"use client";

import { useCallback, useState } from "react";
import { useFormikContext } from "formik";
import { useAction } from "@/models/hooks";
import Answer from "./Answer";
import insert from "@/lib/insert";
import { answersActions } from "@/models/answers";
import { useContext } from "react";
import DndContext from "@/context/DndContext";

const AnswerContainer = ({ position, name, answer, answers }) => {
  const answerId = answers[position]?.id;

  const {
    values: question,
    status: { questionId },
    setFieldValue,
    setFieldError,
  } = useFormikContext();

  const { dragIndex, dropIndex, onDragStart, onDragEnter, onDragEnd } =
    useContext(DndContext);

  const [isEdit, setIsEdit] = useState(false);

  const editAnswer = useAction(answersActions.editAnswer);
  const insertAnswer = useAction(answersActions.insertAnswer);
  const deleteAnswer = useAction(answersActions.deleteAnswer);

  const handleStart = useCallback(() => isEdit || setIsEdit(true), [isEdit]);
  const handleFinish = useCallback(() => isEdit && setIsEdit(false), [isEdit]);

  const handleEditAnswer = useCallback(
    (editedAnswer) => {
      if (
        answer.text !== editedAnswer.text ||
        answer.is_right !== editedAnswer.is_right
      ) {
        answerId &&
          editAnswer({
            answerId,
            position,
            answer: editedAnswer,
          });
        setFieldValue(`answers[${position}]`, editedAnswer);
      }
      handleFinish();
    },
    [answerId, position, answer, setFieldValue, editAnswer, handleFinish]
  );

  const handleDeleteAnswer = useCallback(() => {
    if (questionId && answer.is_right) {
      const rightAnswersCount = question.answers.filter(
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
      question.answers.filter((_, i) => position !== i)
    );
    answerId && deleteAnswer({ questionId, answerId });
  }, [question, questionId, answerId, answer, deleteAnswer, setFieldValue]);

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
          insert(
            question.answers,
            dragIndex,
            dropIndex !== null ? dropIndex : position
          )
        );
      }
      onDragEnd();
    },
    [
      dragIndex,
      dropIndex,
      question,
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
      isSelected={dragIndex !== null}
      isActive={dragIndex === position}
      isTarget={dropIndex === position}
      isEdit={isEdit}
      idPrefix={name}
      initialValues={answer}
      onClick={handleStart}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      onDropClick={handleDropClick}
      onDelete={handleDeleteAnswer}
      onSubmit={handleEditAnswer}
      onReset={handleFinish}
    />
  );
};

export default AnswerContainer;
