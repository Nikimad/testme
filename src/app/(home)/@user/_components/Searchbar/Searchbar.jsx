import SearchField from "../SearchField";
import PerField from "../PerField";
import SortField from "../SortField";
import s from "./Searchbar.module.scss";

const Searchbar = () => (
  <form className={s.searchbar}>
    <SearchField />
    <PerField />
    <SortField />
  </form>
);

export default Searchbar;
