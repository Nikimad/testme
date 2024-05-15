import cn from "classnames";
import s from "./StyledContainer.module.scss";

const StyledContainer = ({ className, children }) => (
  <div className={cn(s.container, { [className]: Boolean(className) })}>
    {children}
  </div>
);

export default StyledContainer;
