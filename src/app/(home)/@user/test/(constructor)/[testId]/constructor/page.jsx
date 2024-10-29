import QuestionEditor from "./_components/QuestionEditor";

const ConstructorPage = () => (
  <>
  <QuestionEditor />
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <button type="submit" className="pill">
      Save
    </button>
    <button type="reset" className="pill">
      Delete
    </button>
  </div>
  </>
);

export default ConstructorPage;
