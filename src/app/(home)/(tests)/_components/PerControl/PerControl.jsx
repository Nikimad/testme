import { Field } from "formik";
import ControlField from "../ControlField";
import s from "./PerControl.module.scss";

const PerControl = () => (
  <ControlField label="Tests per page" htmlFor="per">
    <Field id="per" type="number" name="per" className={s.field} />
  </ControlField>
);

export default PerControl;
