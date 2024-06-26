"use client";

import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAction from "@/hooks/useAction";
import { authActions } from "@/models/auth";
import { authSelectors } from "@/models/auth/selectors";
import Header from "./Header";

const HeaderContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthLoading = useSelector(authSelectors.selectIsLoading);
  const isUserAuthorized = useSelector(authSelectors.selectIsUserAuthorized);
  const logout = useAction(authActions.logout);
  const handleLogout = () => logout();

  useLayoutEffect(() => {
    setIsLoading(isAuthLoading);
  }, [isAuthLoading])

  return (
    <Header
      isLoading={isLoading}
      isUserAuthorized={isUserAuthorized}
      onLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
