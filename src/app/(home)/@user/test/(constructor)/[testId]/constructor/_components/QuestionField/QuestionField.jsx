import Field from "@/components/Field";

const QuestionField = ({
  name,
  question,
  onRender,
  onAdd,
  onEdit,
  onDelete,
}) => (
  <>
    <Field
      id="question-title"
      name={`${name}.title`}
      label="Question title"
      onRender={onRender}
    />
    <Field
      id="question-type"
      name={`${name}.question_type`}
      as="select"
      label="Question type"
      disabled={question}
    >
      <option value="single">Single</option>
      <option value="multiple">Multiple</option>
      <option value="number">Number</option>
    </Field>
    { question ? <h2>Answers</h2> : null }
    <div>
      <button
        type="button"
        className="pill"
        onClick={question ? onEdit : onAdd}
      >
        {question ? "Save" : "Add question"}
      </button>
      {question && (
        <button type="button" className="pill" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  </>
);

export default QuestionField;
