import Link from "../Link";
import s from "./TestsList.module.scss";

const Tests = ({ tests }) => (
  <div className={s.tests} aria-live="polite">
    {tests.length === 0 ? (
      <p className={s.tests__text}>No tests yet</p>
    ) : (
      <ul className={s.tests__list}>
        {tests.map((test) => (
          <li key={test.id} className={s.tests__list__item}>
            <Link href={test.title} className={s.tests__list__link}>{test.title}</Link>
            <span>{new Date(test.created_at).toDateString()}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Tests;
