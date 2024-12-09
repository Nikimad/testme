import { useField } from "formik";
import AnswerIsRight from "./AnswerIsRight";

const AnswerIsRightContainer = ({ id, isInvalid }) => {
  const [{ value }] = useField("is_right");
  return <AnswerIsRight id={id} isChecked={value} isInvalid={isInvalid} />;
};

export default AnswerIsRightContainer;
