import cn from "classnames";
import s from "./Placeholder.module.scss";

const Placeholder = ({ isLoading, isFullHeight, children }) =>
  isLoading ? (
    <div
      className={cn(s.placeholder, {
        [s.placeholder_fullheight]: isFullHeight,
      })}
      aria-busy={true}
    >
      {children}
    </div>
  ) : (
    children
  );

export default Placeholder;
