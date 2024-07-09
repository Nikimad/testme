import cn from "classnames";
import { Form, Field } from "formik";
import s from "./TestsController.module.scss";

const TestsController = () => (
  <Form className={s.form}>
    <Field
      placeholder="Search..."
      type="search"
      name="search"
      className={s.form__search}
    />
    <label className={s.form__field__container}>
      <span className={s.form__field__label}>Tests per page</span>
      <Field type="number" name="per" className={s.form__field} />
    </label>
    <div className={cn(s.form__field__container, s.form__datesorter)}>
      <span className={s.form__field__label}>Date</span>
      <div className={cn(s.form__field, s.form__datesorter__fields)}>
        <Field
          type="radio"
          name="sort"
          value="created_at_asc"
          className={cn(s.form__datesorter__field, "visually-hidden")}
          id="created_at_asc"
        />
        <label htmlFor="created_at_asc" className={s.form__datesorter__label}>
          Asc
        </label>
        <Field
          type="radio"
          name="sort"
          value="created_at_desc"
          className={cn(s.form__datesorter__field, "visually-hidden")}
          id="created_at_desc"
        />
        <label htmlFor="created_at_desc" className={s.form__datesorter__label}>
          Desc
        </label>
        <div className={s.form__datesorter__selector} aria-hidden={true} />
      </div>
    </div>
  </Form>
);

export default TestsController;
