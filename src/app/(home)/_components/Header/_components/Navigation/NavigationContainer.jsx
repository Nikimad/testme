"use client";

import useIsUserAuthorized from "@/hooks/useIsUserAuthorized";
import LogoutButton from "../LogoutButton";

const NavigationContainer = ({ children }) => {
  const isUserAuthorized = useIsUserAuthorized();
  return isUserAuthorized ? <LogoutButton /> : children;
};

export default NavigationContainer;
