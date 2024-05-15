import { useFormikContext, getIn } from "formik";
import Field from "./Field";

const FieldContainer = ({ label, name, ...props }) => {
  const { errors } = useFormikContext();
  const isInvalid = getIn(errors, name);

  return <Field isInvalid={isInvalid} label={label} name={name} {...props} />;
};

export default FieldContainer;
