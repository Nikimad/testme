import Logo from "./_components/Logo";
import AdminNavigation from "./_components/AdminNavigation";
import Navigation from "./_components/Navigation";
import s from "./Header.module.scss";

const Header = () => (
  <header className="container">
    <nav className={s.header__nav}>
      <Logo />
      <AdminNavigation />
      <Navigation />
    </nav>
  </header>
);

export default Header;
