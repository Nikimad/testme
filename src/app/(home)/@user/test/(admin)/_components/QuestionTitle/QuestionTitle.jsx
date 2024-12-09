import Field from "@/components/Field";

const QuestionTitle = ({ id }) => (
  <Field id={`${id}-title`} name="title" label="Question title" />
);

export default QuestionTitle;
