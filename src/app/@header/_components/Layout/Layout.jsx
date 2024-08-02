import cn from "classnames";
import Logo from "../Logo";
import s from "./Layout.module.scss";

const Layout = ({ children }) => (
  <header className={cn("container", s.header)}>
    <Logo />
    {children}
  </header>
);

export default Layout;
