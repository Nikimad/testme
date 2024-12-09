import AnswerForm from "./AnswerForm";

const AnswerFormContainer = ({
  id,
  answerId,
  position,
  onEditFinish,
  children,
}) => (
  <AnswerForm
    answerId={answerId}
    id={`${id}.answer${position !== undefined ? `s[${position}]` : ""}${
      answerId ? `-${answerId}` : ""
    }`}
    position={position}
    onEditFinish={onEditFinish}
  >
    {children}
  </AnswerForm>
);

export default AnswerFormContainer;
