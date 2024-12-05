"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { useCallback } from "react";
import { authorizationSelectors } from "@/models/authorization/selectors";;
import AdminNavigation from "./AdminNavigation";

const AdminNavigationContainer = () => {
  const router = useRouter();

  const isUserAdmin = useAppSelector(authorizationSelectors.selecIsUserAdmin);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      router.push("/test/create")
    },
    [router]
  );

  return isUserAdmin && <AdminNavigation onClick={handleClick} />;
};

export default AdminNavigationContainer;
