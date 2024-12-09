import { useFormikContext, getIn } from "formik";
import AnswerFields from "./AnswerFields";

const AnswerFieldsContainer = ({ id, children }) => {
  const { errors } = useFormikContext();
  return (
    <AnswerFields
      id={id}
      isInvalid={getIn(errors, "text")}
    >
      {children}
    </AnswerFields>
  );
};

export default AnswerFieldsContainer;
