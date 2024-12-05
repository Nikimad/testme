import SearchbarField from "../SearchbarField";
import SearchbarLabel from "../SearchbarLabel";
import SortInput from "../SortInput";
import s from "./SortField.module.scss";

const SortField = () => (
  <SearchbarField component="fieldset">
    <SearchbarLabel component="legend">Sort</SearchbarLabel>
    <div className={s.sort}>
      <SortInput
        className={s.sort__input}
        id="created_at_asc"
        value="created_at_asc"
      />
      <SearchbarLabel className={s.sort__label} htmlFor="created_at_asc">
        Asc
      </SearchbarLabel>
      <SortInput
        className={s.sort__input}
        id="created_at_desc"
        value="created_at_desc"
      />
      <SearchbarLabel className={s.sort__label} htmlFor="created_at_desc">
        Desc
      </SearchbarLabel>
    </div>
  </SearchbarField>
);

export default SortField;
