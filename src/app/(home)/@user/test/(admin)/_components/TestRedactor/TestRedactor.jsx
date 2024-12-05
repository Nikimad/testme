import { Form } from "formik";
import Input from "@/components/Input";
import Error from "@/components/Error";
import QuestionDraft from "../QuestionDraft";
import QuestionsList from "../QuestionsList";
import Controls from "../Controls";
import Field from "@/components/Field";

const TestRedactor = ({ test, onPreSubmit, children }) => (
  <div className="form-grid">
    <Form>
      <Field id="test-title" name="title" label="Test title" />
    </Form>
    <QuestionDraft test={test}>
      <Controls test={test} onPreSubmit={onPreSubmit} />
    </QuestionDraft>
    <QuestionsList test={test} />
    {children}
  </div>
);

export default TestRedactor;
