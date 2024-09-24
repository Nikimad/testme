import SearchContext from "../SearchContext";
import QueryControllers from "../QueryControllers";
import Searchbar from "../Searchbar";
import Main from "../Main";
import Pagination from "../Pagination";
import s from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={s.layout}>
    <SearchContext>
      <div>
        <QueryControllers />
        <Searchbar />
        <Main />
        <Pagination />
        { children }
      </div>
    </SearchContext>
  </div>
);

export default Layout;
