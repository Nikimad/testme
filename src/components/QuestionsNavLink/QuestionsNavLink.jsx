import cn from "classnames";
import Link from "next/link";
import s from "./QuestionsNavLink.module.scss";

const QuestionsNavLink = ({ href, linkRef, isActive, children }) => (
  <Link href={href} className={cn(s.link, { [s.link_active]: isActive })} ref={linkRef}>
    {children}
  </Link>
);

export default QuestionsNavLink;
