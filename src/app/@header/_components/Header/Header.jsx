import cn from "classnames";
import Logo from "../Logo";
import s from "./Header.module.scss";

const Header = ({ children }) => (
  <header className={cn("container", s.header)}>
    <Logo />
    <div className={s.header__controls}>{children}</div>
  </header>
);

export default Header;
