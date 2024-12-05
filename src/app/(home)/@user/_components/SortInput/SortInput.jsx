import cn from "classnames";

const SortInput = ({ id, value, isChecked, onChange, className }) => (
  <input
    id={id}
    type="radio"
    name="sort"
    className={cn("visually-hidden", className)}
    onChange={onChange}
    value={value}
    checked={isChecked}
  />
);

export default SortInput;
