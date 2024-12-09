import cn from "classnames";
import { Field } from "formik";
import s from "./AnswerText.module.scss";

const AnswerText = ({ id, isInvalid }) => (
  <Field
    id={`${id}-text`}
    name="text"
    className={cn(s.input, { [s.input_invalid]: isInvalid })}
    aria-describedby={`${id}-text-error`}
  />
);

export default AnswerText;
