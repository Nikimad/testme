import ListItem from "../ListItem";
import s from "./List.module.scss";

const List = ({ tests }) => (
  <div className={s.tests} aria-live="polite">
    {tests.length === 0 ? (
      <p className={s.tests__text}>No tests yet</p>
    ) : (
      <ul className={s.tests__list}>
        {tests.map((test) => (
          <ListItem key={test.id} test={test} href={`test/${test.id}`}>
            {test.title}
          </ListItem>
        ))}
      </ul>
    )}
  </div>
);

export default List;
