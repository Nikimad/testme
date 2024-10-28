import Image from "next/image";
import Link from "next/link";
import s from "./Banner.module.scss";

const Banner = () => (
  <div className={s.banner}>
    <div className={s.banner__content}>
      <h2 className={s.banner__title}>Discover the Joy of Learning</h2>
      <p>
        Education is the key to unlocking a world of opportunities. It is a
        journey that empowers individuals to reach their full potential and make
        a positive impact on society. In today&apos;s fast-paced and ever-changing
        world, education plays a crucial role in shaping the future.
      </p>
      <Link className={`pill ${s.banner__link}`} href="/signin">
        Getting start
      </Link>
    </div>
    <Image
      className={s.banner__img}
      width={580}
      height={525}
      priority={true}
      src="/main.svg"
      alt="Charts"
      aria-hidden={true}
    />
  </div>
);

export default Banner;
