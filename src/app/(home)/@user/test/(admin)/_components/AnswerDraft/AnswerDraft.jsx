import cn from "classnames";
import AnswerRedactor from "../AnswerRedactor";
import ControlButton from "../ControlButton";
import s from "./AnswerDraft.module.scss";


const AnswerDraft = ({ idPrefix, onSubmit }) => (
  <div className="form-grid">
    <AnswerRedactor idPrefix={idPrefix} onSubmit={onSubmit}>
      <ControlButton type="submit" className={cn("pill", s.draft__button)}>
        Add answer
      </ControlButton>
    </AnswerRedactor>
  </div>
);

export default AnswerDraft;
