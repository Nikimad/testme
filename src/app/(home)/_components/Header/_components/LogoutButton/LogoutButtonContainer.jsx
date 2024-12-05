"use client";

import useIsUserAuthorized from "@/hooks/useIsUserAuthorized";

const LogoutButtonContainer = ({ children }) => {
  const isUserAuthorized = useIsUserAuthorized();
  return isUserAuthorized && children;
};

export default LogoutButtonContainer;
