import cn from "classnames";
import AnswerRedactor from "../AnswerRedactor";
import ControlButton from "../ControlButton";
import s from "./Answer.module.scss";

const Answer = ({
  isRight,
  isSelected,
  isActive,
  isTarget,
  isEdit,
  idPrefix,
  initialValues,
  onClick,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDropClick,
  onDelete,
  onSubmit,
  onReset,
}) => (
  <li
    className={cn(s.answer, {
      [s.answer_target]: !isActive && !isEdit && isTarget,
      [s.answer_right]: isRight,
    })}
    draggable={!isEdit}
    onDragStart={!isEdit ? onDragStart : () => {}}
    onDragEnter={!isEdit ? onDragEnter : () => {}}
    onDragEnd={!isEdit ? onDragEnd : () => {}}
  >
    {!isEdit ? (
      <>
        <span>{initialValues.text}</span>
        <div className={s.answer__controls}>
          <ControlButton
            type="button"
            className="pill"
            onClick={isSelected ? onDropClick : onDragStart}
          >
            {!isSelected ? "Select" : isActive ? "Cancel" : "Insert"}
          </ControlButton>
          {!isSelected && (
            <>
              <ControlButton type="button" className="pill" onClick={onClick}>
                Edit
              </ControlButton>
              <ControlButton
                type="button"
                className="interactivetext"
                onClick={onDelete}
              >
                Delete
              </ControlButton>
            </>
          )}
        </div>
      </>
    ) : (
      <AnswerRedactor
        idPrefix={idPrefix}
        initialValues={initialValues}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <div className={s.answer__controls}>
          <ControlButton type="submit" className="pill">
            Save
          </ControlButton>
          <ControlButton type="reset" className="interactivetext">
            Cancel
          </ControlButton>
        </div>
      </AnswerRedactor>
    )}
  </li>
);

export default Answer;
