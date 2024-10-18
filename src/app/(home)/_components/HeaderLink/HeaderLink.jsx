import HeaderLinkContainer from "./HeaderLinkContainer";
import Link from "next/link";

const HeaderLink = ({ href, children }) => (
  <HeaderLinkContainer href={href}>
    <Link href={href} className="interactivetext" children={children} />
  </HeaderLinkContainer>
);

export default HeaderLink;
