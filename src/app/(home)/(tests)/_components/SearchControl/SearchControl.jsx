import { Field } from "formik";
import s from "./SearchControl.module.scss";

const SearchControl = () => (
  <Field
    placeholder="Search..."
    type="search"
    name="search"
    className={s.search}
  />
);

export default SearchControl;
