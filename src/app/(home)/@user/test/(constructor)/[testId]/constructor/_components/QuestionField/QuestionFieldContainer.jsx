import { useFormikContext } from "formik";
import QuestionField from "./QuestionField";
import { useCallback, useState } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { constructorActions } from "@/models/constructor";
import { constructorSelectors } from "@/models/constructor/selectors";
import { REQUIERD_STRING } from "@/lib/messages";

const QuestionFieldContainer = ({ name, i, onFinish }) => {
  const { id } = useAppSelector(constructorSelectors.selectTest);
  const questions = useAppSelector(constructorSelectors.selectQuestions);

  const [index, setIndex] = useState(i);

  const {
    values: { question: newDraft, questions: { [i]: reDraft } },
    setStatus,
    setFieldError,
    setFieldValue,
  } = useFormikContext();

  const question = reDraft || newDraft;

  const addQuestion = useAction(constructorActions.addQuestion);
  const editQuestion = useAction(constructorActions.editQuestion);
  const deleteQuestion = useAction(constructorActions.deleteQuestion);

  const onAdd = useCallback(() => {
    if (question.title) {
      const newQuestion = {
        title: question.title,
        question_type: question.question_type,
      };
      setFieldError("question.title");
      setIndex(questions.length);
      return addQuestion({ id, body: newQuestion });
    }
    setFieldError("question.title", REQUIERD_STRING);
  }, [REQUIERD_STRING, question, questions, setFieldError, setFieldValue, addQuestion]);

  const onEdit = useCallback(
    () => {
      if (question.title) {
        const newQuestion = {
          title: question.title,
          question_type: question.question_type,
        };
        if (questions[index].title !== question.title) {
          editQuestion({
            id: questions[index].id,
            body: newQuestion,
          });
        }
        setFieldError(`${name}.title`);
        onFinish || setFieldValue("question.title", "");
        setFieldValue(`questions[${index}]`, {
          id: questions[index].id,
          ...newQuestion,
        });
        return onFinish && onFinish();
      }
      setFieldError(`${name}.title`, REQUIERD_STRING);
    },
    [
    REQUIERD_STRING,
    name,
    index,
    question,
    questions,
    editQuestion,
    setFieldError,
    setFieldValue,
    setStatus,
    onFinish,
    ]
  );

  const onDelete = useCallback(() => {
    deleteQuestion(questions[index].id);
    setFieldError(`${name}.title`);
    onFinish || setFieldValue("qusetion.title", "");
    ///Delete from formik
    return onFinish && onFinish();
  }, [questions, name, index, deleteQuestion, setStatus, setFieldError, setFieldValue, onFinish]);

  const onRender = useCallback(
    (el) => {
      if (questions[index]) el?.focus();
    },
    [questions, index]
  );

  return (
    <QuestionField
      name={name}
      question={questions[index]}
      onRender={onRender}
      onAdd={onAdd}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default QuestionFieldContainer;
