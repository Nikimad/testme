import SearchContext from "../SearchContext";
import Searchbar from "../Searchbar";
import Main from "../Main";
import Pagination from "../Pagination";
import s from "./Tests.module.scss";

const Tests = () => (
  <SearchContext>
    <div className={s.tests}>
      <Searchbar />
      <Main />
      <Pagination />
    </div>
  </SearchContext>
);

export default Tests;
