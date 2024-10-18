"use client";

import { usePathname } from "next/navigation";

const HeaderLinkContainer = ({ href, children }) => {
  const pathname = usePathname();
  return href !== pathname ? children : null;
};

export default HeaderLinkContainer;
