import cn from "classnames";
import { Field } from "formik";
import s from "./DateControl.module.scss";
import ControlField from "../ControlField";

const DateControl = () => (
  <ControlField label="Date" htmlFor="sort">
    <div className={s.datecontrol}>
      <Field
        type="radio"
        name="sort"
        value="created_at_asc"
        className={cn(s.datecontrol__input, "visually-hidden")}
        id="created_at_asc"
      />
      <label htmlFor="created_at_asc" className={s.datecontrol__label}>
        Asc
      </label>
      <Field
        type="radio"
        name="sort"
        value="created_at_desc"
        className={cn(s.datecontrol__input, "visually-hidden")}
        id="created_at_desc"
      />
      <label htmlFor="created_at_desc" className={s.datecontrol__label}>
        Desc
      </label>

      <div className={s.datecontrol__selector} aria-hidden={true} />
    </div>
  </ControlField>
);

export default DateControl;
