import cn from "classnames";
import AnswerForm from "../AnswerForm";
import Button from "../Button";
import s from "./Answer.module.scss";

const Answer = ({
  id,
  answerId,
  position,
  answer,
  isRight,
  isEdit,
  isSelect,
  isActive,
  isTarget,
  onClick,
  onEditFinish,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDropClick,
  onDelete,
}) => (
  <li
    className={cn(s.answer, {
      [s.answer_target]: !isSelect && !isEdit && isTarget,
      [s.answer_right]: isRight,
    })}
    draggable={!isEdit}
    onDragStart={!isEdit ? onDragStart : () => {}}
    onDragEnter={!isEdit ? onDragEnter : () => {}}
    onDragEnd={!isEdit ? onDragEnd : () => {}}
  >
    {!isEdit ? (
      <>
        <span>{answer.text}</span>
        <div className={s.answer__controls}>
          <button
            type="button"
            className="pill"
            onClick={isActive ? onDropClick : onDragStart}
          >
            {!isActive ? "Select" : isSelect ? "Cancel" : "Insert"}
          </button>
          {!isActive && (
            <>
              <button type="button" className="pill" onClick={onClick}>
                Edit
              </button>
              <button
                type="button"
                className="interactivetext"
                onClick={onDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </>
    ) : (
      <AnswerForm
        id={id}
        answerId={answerId}
        position={position}
        onEditFinish={onEditFinish}
      >
        <div className={s.answer__controls}>
          <Button type="submit" className="pill">
            Save
          </Button>
          <Button type="reset" className="interactivetext">
            Cancel
          </Button>
        </div>
      </AnswerForm>
    )}
  </li>
);

export default Answer;
