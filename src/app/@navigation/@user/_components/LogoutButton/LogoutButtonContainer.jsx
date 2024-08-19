"use client";

import { useAction } from "@/models/hooks";
import { authActions } from "@/models/auth";
import LogoutButton from "./LogoutButton";

const LogoutButtonContainer = () => {
  const logout = useAction(authActions.logout);

  const handleLogout = () => {
    logout();
    try {
      localStorage.clear();
    } catch {
      return;
    }
  };

  return <LogoutButton onClick={handleLogout} />;
};

export default LogoutButtonContainer;
