import { Form } from "formik";
import TestTitle from "../TestTitle";
import QuestionForm from "../QuestionForm";
import TestQuestionSubmit from "../TestQuestionSubmit";
import QuestionProvider from "../QuestionProvider";

const TestForm = ({ test, isTestDirty, onPreSubmit }) => (
  <>
    <Form>
      <TestTitle />
    </Form>
    <QuestionProvider test={test}>
      <QuestionForm isTestDirty={isTestDirty}>
        <div className="justify_sb">
          <TestQuestionSubmit
            isTestCreated={test.id}
            onPreSubmit={onPreSubmit}
          />
          {test.id && (
            <button type="reset" className="interactivetext">
              Delete test
            </button>
          )}
        </div>
      </QuestionForm>
    </QuestionProvider>
  </>
);

export default TestForm;
