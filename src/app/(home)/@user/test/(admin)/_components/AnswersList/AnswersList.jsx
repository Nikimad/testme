import cn from "classnames";
import DndContextProvider from "@/components/DndProvider";
import Error from "@/components/Error";
import Answer from "../Answer";
import s from "./AnswersList.module.scss";

const AnswersList = ({ id, isInvalid, answersStore, answers }) => (
  <DndContextProvider>
    <div
      className={cn(s.list__container, {
        [s.list__container_invalid]: isInvalid,
      })}
    >
      {answersStore.length > 0 ? (
        <ul className={s.list}>
          {answersStore.map((_, i) => (
            <Answer
              key={answers[i]?.id || i}
              id={id}
              answerId={answers[i]?.id}
              position={i}
            />
          ))}
        </ul>
      ) : (
        <p className={cn("m_0", s.list__status)}>There are no answers yet</p>
      )}
      <Error name="answers" />
    </div>
  </DndContextProvider>
);

export default AnswersList;
