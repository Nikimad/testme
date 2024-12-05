import cn from "classnames";
import { Field } from "formik";
import Error from "@/components/Error";
import s from "./AnswerRedactor.module.scss"

const AnswerRedactor = ({ idPrefix, isChecked, isInvalid, children }) => (
  <div className={cn(s.draft, { [s.draft_invalid]: isInvalid })}>
    <label htmlFor={`${idPrefix}-text`}>Answer text</label>
    <div className={s.draft__field__container}>
      <div className={s.draft__field}>
        <Field
          id={`${idPrefix}-is_right`}
          name="is_right"
          type="checkbox"
          className={cn(s.draft__choice, "visually-hidden")}
          aria-describedby={`${idPrefix}-is_right-error`}
          value={isChecked}
          checked={isChecked}
        />
        <label
          htmlFor={`${idPrefix}-is_right`}
          className={s.draft__choice__apperance}
        >
          <span className="visually-hidden">Answer is right</span>
        </label>
        <Field
          id={`${idPrefix}-text`}
          name="text"
          className={s.draft__text}
          aria-describedby={`${idPrefix}-text-error`}
        />
      </div>
      {children}
    </div>
    <Error id={`${idPrefix}-is_right-error`} name="is_right" />
    <Error id={`${idPrefix}-text-error`} name="text" />
  </div>
);

export default AnswerRedactor;
