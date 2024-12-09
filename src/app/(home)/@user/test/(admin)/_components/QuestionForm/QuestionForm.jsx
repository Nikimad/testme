import { Form } from "formik";
import QuestionFields from "../QuestionFields";
import Button from "../Button";
import AnswerForm from "../AnswerForm";
import AnswersList from "../AnswersList";

const QuestionForm = ({ id, onSubmit, children }) => (
  <Form className="form-grid" onSubmit={onSubmit}>
    <QuestionFields id={id}>
      <AnswerForm id={id}>
        <Button type="submit" className="pill">Add answer</Button>
      </AnswerForm>
      <AnswersList id={id} />
    </QuestionFields>
    {children}
  </Form>
);

export default QuestionForm;
