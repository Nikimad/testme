import Error from "@/components/Error";
import AnswerIsRight from "../AnswerIsRight";
import AnswerText from "../AnswerText";
import s from "./AnswerFields.module.scss";

const AnswerFields = ({ id, isInvalid, children }) => (
  <div className={s.fields__wrapper}>
    <label htmlFor={`${id}-text`}>Answer text</label>
    <div className={s.fields__container}>
      <div className={s.fields}>
        <AnswerIsRight id={id} isInvalid={isInvalid} />
        <AnswerText id={id} isInvalid={isInvalid} />
      </div>
      { children }
    </div>
    <Error id={`${id}-is_right-error`} name="is_right" />
    <Error id={`${id}-text-error`} name="text" />
  </div>
);

export default AnswerFields;
