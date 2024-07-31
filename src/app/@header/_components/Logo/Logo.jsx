import Image from "next/image";
import Link from "next/link";
import s from "./Logo.module.scss";

const Logo = () => (
  <div className={s.logo}>
    <Image
      src="/logo.svg"
      width={25}
      height={25}
      alt="logo"
      aria-hidden={true}
    />
    <h1 className={s.logo__title}>TestMe</h1>
    <Link href="/" className={s.logo__link}>
      <span className="visually-hidden">Home</span>
    </Link>
  </div>
);

export default Logo;
