import s from "./Placeholder.module.scss";

const Placeholder = ({ isLoading, children }) =>
  isLoading ? <div className={s.placeholder} aria-busy={true}>{children}</div> : children;

export default Placeholder;
