import cn from "classnames";
import DndContextProvider from "@/components/DndProvider";
import Answer from "../Answer";
import Error from "@/components/Error";
import s from "./AnswersList.module.scss";

const AnswersList = ({
  isInvalid,
  answersStore,
  answers,
}) => (
  <DndContextProvider>
    <div className={cn(s.draft, { [s.draft_invalid]: isInvalid })}>
    {answersStore.length > 0 ? (
      <ul className={s.draft__list}>
        {answersStore.map((answer, i) => (
          <Answer
            answers={answers}
            answer={answer}
            key={answers[i]?.id || i}
            position={i}
            name={`answers[${i}]`}
          />
        ))}
      </ul>
    ) : (
      <p className={cn("m_0", s.draft__status)}>There are no answers yet</p>
    )}
    <Error name="answers" />
  </div>
  </DndContextProvider>
);

export default AnswersList;
