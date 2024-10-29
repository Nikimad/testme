import QuestionEditor from "./QuestionEditor";
import s from "./QuestionEditor.module.scss";

const QuestionEditorContainer = () => (
  <fieldset className={s.container}>
    <legend className="visually-hidden">Question constructor</legend>
    <QuestionEditor />
  </fieldset>
);

export default QuestionEditorContainer;
