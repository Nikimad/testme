import Getter from "../Getter";
import Searchbar from "../Searchbar";
import Status from "../Status";
import Loader from "../Loader";
import Pagination from "../Pagination";
import s from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={s.layout}>
    <Getter />
    <Searchbar />
    <div className={s.layout__main}>
      <ul className={s.layout__main__list}>{children}</ul>
      <p className={s.layout__main__status}>
        <Status />
      </p>
    </div>
    <div className={s.layout__footer}>
      <Loader />
      <Pagination />
    </div>
  </div>
);

export default Layout;
