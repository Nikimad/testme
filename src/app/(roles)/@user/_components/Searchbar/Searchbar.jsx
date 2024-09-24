import s from "./Searchbar.module.scss";
import PerInput from "../PerInput";
import SearchField from "../SearchField";

const Searchbar = () => (
  <form className={s.searchbar}>
    <div className={s.searchbar__field}>
      <label className={s.searchbar__field__label} htmlFor="search">
        Search
      </label>
      <SearchField
        className={s.searchbar__field__input}
        id="search"
        type="search"
        name="search"
      />
    </div>
    <div className={s.searchbar__field}>
      <label className={s.searchbar__field__label} htmlFor="per">
        Tests per page
      </label>
      <PerInput className={s.searchbar__field__input} />
    </div>
    <fieldset className={s.searchbar__field}>
      <legend className={s.searchbar__field__label}>Sort</legend>
      <div className={s.searchbar__field__radiogroup}>
        <SearchField
          id="created_at_asc"
          value="created_at_asc"
          type="radio"
          name="sort"
          className="visually-hidden"
        />
        <label className={s.searchbar__field__label} htmlFor="created_at_asc">
          Asc
        </label>
        <SearchField
          id="created_at_desc"
          value="created_at_desc"
          type="radio"
          name="sort"
          className="visually-hidden"
        />
        <label className={s.searchbar__field__label} htmlFor="created_at_desc">
          Desc
        </label>
      </div>
    </fieldset>
  </form>
);

export default Searchbar;
