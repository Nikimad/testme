import Input from "@/components/Input";
import Error from "@/components/Error";
import AnswerDraft from "../AnswerDraft";
import AnswersList from "../AnswersList";
import { Form } from "formik";

import Select from "@/components/Select";
import QuestionTypeSelect from "../QuestionTypeSelect";

const QuestionRedactor = ({ onSubmit, idPrefix, type, children }) => (
  <Form className="form-grid" onSubmit={onSubmit}>
    <div>
      <label htmlFor={`${idPrefix}-title`}>Question title</label>
      <Input
        id={`${idPrefix}-title`}
        name="title"
        aria-describedby={`${idPrefix}-title-error`}
      />
      <Error id={`${idPrefix}-title-error`} name="title" />
    </div>
    <QuestionTypeSelect id={`${idPrefix}-question_type`} />
    {type === "number" ? (
      <div>
        <label htmlFor={`${idPrefix}-answer`}>Answer</label>
        <Input
          id={`${idPrefix}-answer`}
          name="answer"
          type="number"
          aria-describedby={`${idPrefix}-answer-error`}
        />
        <Error id={`${idPrefix}-answer-error`} name="answer" />
      </div>
    ) : (
      <>
        <AnswerDraft idPrefix={idPrefix} />
        <AnswersList />
      </>
    )}
    {children}
  </Form>
);

export default QuestionRedactor;
