import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import s from "./Header.module.scss";

const Header = ({ children }) => (
  <header className={cn("container", s.header)}>
    <nav className={s.header__nav}>
      <div className={s.header__logo}>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          aria-hidden={true}
          className={s.header__logo__img}
        />
        <h1 className={s.header__logo__title}>TestMe</h1>
        <Link href="/" prefetch={false} className={s.header__logo__link}>
          <span className="visually-hidden">Home</span>
        </Link>
      </div>
      {children}
    </nav>
  </header>
);

export default Header;
