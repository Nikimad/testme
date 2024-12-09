const TestQuestionSubmit = ({ isTestCreated, isQuestionDirty, onClick }) => (
  <button type="submit" className="pill" onClick={onClick}>
    {!isTestCreated
      ? `Create test${isQuestionDirty ? " and save question" : ""}`
      : "Save"}
  </button>
);

export default TestQuestionSubmit;
