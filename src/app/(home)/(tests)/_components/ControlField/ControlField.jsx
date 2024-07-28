import s from "./ControlField.module.scss";

const ContolField = ({ label, htmlFor, children }) => (
  <div className={s.field}>
    <label htmlFor={htmlFor} className={s.field__label}>{label}</label>
    {children}
  </div>
);

export default ContolField;
