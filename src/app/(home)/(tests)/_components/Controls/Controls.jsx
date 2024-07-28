import cn from "classnames";
import { Form, Field } from "formik";
import SearchControl from "../SearchControl";
import DateControl from "../DateControl";
import PerControl from "../PerControl";
import Router from "../Router";
import s from "./Controls.module.scss";

const Controls = () => (
  <Form className={s.controls}>
    <SearchControl />
    <PerControl />
    <DateControl />
    <Router />
  </Form>
);

export default Controls;

/*
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
  */