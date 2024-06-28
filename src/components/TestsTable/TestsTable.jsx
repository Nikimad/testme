import Link from "../Link";
import LayoutContainer from "../LayoutContainer";
import Search from "../Search";
import s from "./TestsTable.module.scss";

const TestsTable = ({ tests, testsLength, onSort, isTableAsc }) => (
  <LayoutContainer element="section">
    <div className={s.table__container} style={{"--length": testsLength}}>
      <div className={s.table__controls}>
        <Search
          inputClassName={s.table__controls__search__input}
          buttonClassName={s.table__controls__search__button}
        />
        <button className={s.table__controls__sort} onClick={onSort}>
          Date {isTableAsc ? <>&#11206;</> : <>&#11205;</>}
        </button>
      </div>
      {testsLength > 0 ? (
        <ul className={s.table}>
          {tests.map((test) => (
            <li key={test} className={s.table__item}>
              <Link href="/">Test {test}</Link>
              <span className={s.table__item__date}>
                {new Date(Date.now()).toDateString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.table__container__plug}><p>No tests yet</p></div>
      )}
    </div>
  </LayoutContainer>
);

export default TestsTable;
