"use client";

import { usePathname } from "next/navigation";

const NavigationItemContainer = ({ href, children }) => {
  const pathname = usePathname();
  return href !== pathname ? children : null;
};

export default NavigationItemContainer;
