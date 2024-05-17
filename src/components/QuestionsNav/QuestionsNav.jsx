import QuestionsNavLink from "../QuestionsNavLink";
import s from "./QuestionsNav.module.scss";

const QuestionsNavigator = ({ questionsIds }) => (
  <nav className={s.navigator}>
    <ul className={s.navigator__items}>
      {questionsIds.map((id, i) => (
        <li key={id} className={s.navigator__item}>
          <QuestionsNavLink href={`${id}`}>{i + 1}</QuestionsNavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default QuestionsNavigator;
