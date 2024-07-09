import LayoutContainer from "../LayoutContainer";
import Placeholder from "../Placeholder";
import Link from "@/components/Link";
import Button from "../Button";
import Image from "next/image";
import s from "./Header.module.scss";

const Header = ({ isLoading, isUserAuthorized, onLogout }) => (
  <LayoutContainer element="header" className={s.header}>
    <div className={s.header__logobox}>
      <Image src="/logo.svg" width={28} height={28} alt="logo" aria-hidden={true} />
      <h1 className={s.header__heading}>TestMe</h1>
      <Link href="/" className={s.header__homelink}><span className="visually-hidden">Home</span></Link>
    </div>
    <Placeholder isLoading={isLoading}>
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
    </Placeholder>
  </LayoutContainer>
);

export default Header;
