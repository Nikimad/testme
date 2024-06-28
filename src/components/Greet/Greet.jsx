import Image from "next/image";
import LayoutContainer from "../LayoutContainer";
import Button from "../Button";
import s from "./Greet.module.scss";

const Greet = () => (
  <LayoutContainer element="section" className={s.container}>
    <div className={s.container__content}>
      <h2 className={s.container__title}>Discover the Joy of Learning</h2>
      <p className={s.container__text}>
      Education is the key to unlocking a world of opportunities. It is a journey that empowers individuals to reach their full potential and make a positive impact on society. In today's fast-paced and ever-changing world, education plays a crucial role in shaping the future.
      </p>
      <Button className={s.container__button}>Geting start</Button>
    </div>
    <Image className={s.container__img} width={500} height={500} src="/main.svg" alt="Charts" aria-hidden={true} />
  </LayoutContainer>
);

export default Greet;
