import { Form } from "formik";
import Questions from "../Questions";
import Controls from "../Controls";
import LocalStorage from "../LocalStorage";

const Test = ({ defaultInitialState, questions }) => (
  <Form>
    <Questions questions={questions} />
    <Controls defaulInitialState={defaultInitialState} />
    <LocalStorage />
  </Form>
);

export default Test;
