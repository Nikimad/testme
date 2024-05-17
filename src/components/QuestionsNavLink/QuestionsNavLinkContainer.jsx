import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import QuestionsNavLink from "./QuestionsNavLink";

const QuestionsNavLinkContainer = ({ href, children }) => {
  const linkRef = useRef(null);
  const pathname = usePathname();

  const isActive = pathname.endsWith(`question/${href}`);

  useEffect(() => {
    if (isActive) {
      linkRef.current.scrollIntoView();
    }
  }, [isActive]);

  return (
    <QuestionsNavLink
      href={href}
      linkRef={linkRef}
      isActive={isActive}
      children={children}
    />
  );
};

export default QuestionsNavLinkContainer;
