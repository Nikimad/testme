import { Form, Field } from "formik";
import s from "./Search.module.scss";

const Search = ({ inputClassName, buttonClassName }) => (
  <Form className={s.search}>
    <Field name="query" className={inputClassName} placeholder="Search..." />
    <button
      type="submit"
      className={buttonClassName}
    >⌕
      <span className="visually-hidden">Search tests</span>
    </button>
  </Form>
);

export default Search;
