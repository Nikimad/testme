import cn from "classnames";
import Choice from "@/components/Choice";
import { Field } from "formik";
import s from "./AnswerRight.module.scss";

const AnswerIsRight = ({ id, isChecked, isInvalid }) => (
  <Choice
    className={cn(s.choice__apperance, {
      [s.choice__apperance_invalid]: isInvalid,
    })}
  >
    <span className="visually-hidden">Answer is right</span>
    <Field
      id={`${id}-is_right`}
      name="is_right"
      type="checkbox"
      className={cn(s.choice, "visually-hidden")}
      aria-describedby={`${id}-is_right-error`}
      value={isChecked}
      checked={isChecked}
    />
  </Choice>
);

export default AnswerIsRight;
