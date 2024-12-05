const Controls = ({ isTestCreated, isQuestionDirty, onPreSubmit }) => (
  <div className="justify_sb">
    <button type="submit" className="pill" onClick={onPreSubmit}>
      {!isTestCreated
        ? `Create test${isQuestionDirty ? " and save question" : ""}`
        : "Save"}
    </button>
    {isTestCreated && (
      <button type="reset" className="interactivetext">
        Delete test
      </button>
    )}
  </div>
);

export default Controls;
