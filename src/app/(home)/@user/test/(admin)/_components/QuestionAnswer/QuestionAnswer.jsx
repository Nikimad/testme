import Field from "@/components/Field";

const QuestionAnswer = ({ id }) => (
  <Field id={`${id}-answer`} name="answer" type="number" label="Answer" />
);

export default QuestionAnswer;
