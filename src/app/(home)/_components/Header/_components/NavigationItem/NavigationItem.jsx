import NavigationItemContainer from "./NavigationItemContainer";
import Link from "next/link";

const NavigationItem = ({ href, children }) => (
  <NavigationItemContainer href={href}>
    <Link href={href} className="interactivetext">
      {children}
    </Link>
  </NavigationItemContainer>
);

export default NavigationItem;
