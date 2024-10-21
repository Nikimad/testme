import SearchField from "../SearchField";
import PerInput from "../PerInput";
import Sort from "../Sort";
import s from "./Searchbar.module.scss";

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
        enableEmpty={true}
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
        <Sort
          id="created_at_asc"
          value="created_at_asc"
        />
        <label className={s.searchbar__field__label} htmlFor="created_at_asc">
          Asc
        </label>
        <Sort
          id="created_at_desc"
          value="created_at_desc"
        />
        <label className={s.searchbar__field__label} htmlFor="created_at_desc">
          Desc
        </label>
      </div>
    </fieldset>
  </form>
);

export default Searchbar;
