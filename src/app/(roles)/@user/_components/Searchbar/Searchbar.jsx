import SearchbarInput from "../SearchbarInput";
import s from "./Searchbar.module.scss";

const Searchbar = () => (
  <form className={s.searchbar}>
    <div className={s.searchbar__field}>
      <label className={s.searchbar__field__label} htmlFor="search">
        Search
      </label>
      <SearchbarInput
        className={s.searchbar__field__input}
        id="search"
        type="search"
        name="search"
        defaultValue={""}
      />
    </div>
    <div className={s.searchbar__field}>
      <label className={s.searchbar__field__label} htmlFor="per">
        Tests per page
      </label>
      <SearchbarInput
        className={s.searchbar__field__input}
        id="per"
        type="number"
        min={1}
        name="per"
        defaultValue={5}
      />
    </div>
    <fieldset className={s.searchbar__field}>
      <legend className={s.searchbar__field__label}>Sort</legend>
      <div className={s.searchbar__field__radiogroup}>
        <SearchbarInput
          id="created_at_asc"
          defaultValue="created_at_asc"
          value="created_at_asc"
          type="radio"
          name="sort"
          className="visually-hidden"
        />
        <label className={s.searchbar__field__label} htmlFor="created_at_asc">
          Asc
        </label>
        <SearchbarInput
          id="created_at_desc"
          defaultValue="created_at_asc"
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
