import TestLink from "../TestLink";
import s from "./TestsList.module.scss";

const Tests = ({ tests }) => (
  <div className={s.tests} aria-live="polite">
    {tests.length === 0 ? (
      <p className={s.tests__text}>No tests yet</p>
    ) : (
      <ul className={s.tests__list}>
        {tests.map((test) => (
          <li key={test.id} className={s.tests__list__item}>
            <TestLink href={String(test.id)} className={s.tests__list__link}>{test.title}</TestLink>
            <span>{new Date(test.created_at).toDateString()}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Tests;
