"use client";

import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/authorization/selectors";

const AdminNavigationContainer = ({ children }) => {
  const isUserAdmin = useAppSelector(authorizationSelectors.selecIsUserAdmin);
  return isUserAdmin && children;
};

export default AdminNavigationContainer;
