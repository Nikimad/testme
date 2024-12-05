import cn from "classnames";
import s from "./SearchbarInput.module.scss";

const SearchbarInput = ({ inputRef, className, ...props }) => (
  <input ref={inputRef} className={cn(s.input, className ?? "")} {...props} />
);

export default SearchbarInput;
