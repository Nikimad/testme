import cn from "classnames";
import LayoutContainer from "../LayoutContainer";
import Link from "@/components/Link";
import Button from "../Button";
import Image from "next/image";
import s from "./Header.module.scss";

const Header = ({ isLoading, isUserAuthorized, onLogout }) => (
  <LayoutContainer element="header" className={s.header}>
    <div className={s.header__logobox}>
      <Image src="/logo.svg" width={28} height={28} alt="logo" aria-hidden={true} />
      <h1 className={s.header__heading}>TestMe</h1>
    </div>
    <div
      className={cn(s.header__content, {
        [s.header__content_loading]: isLoading,
      })}
    >
      <div className={s.header__controls}>
        {!isUserAuthorized ? (
          <>
            <Link href={"signin"} className={s.header__link}>
              Sign in
            </Link>
            <Link href={"signup"} className={s.header__link}>
              Sign up
            </Link>
          </>
        ) : (
          <Button onClick={onLogout}>Log out</Button>
        )}
      </div>
    </div>
  </LayoutContainer>
);

export default Header;
