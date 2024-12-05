"use client";

import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/authorization/selectors";
import ErrorControl from "../ErrorControl";
import ErrorPage from "@/components/ErrorPage";

const AccessControl = ({ children }) => {
  const isUserAdmin = useAppSelector(authorizationSelectors.selecIsUserAdmin);

  return isUserAdmin ? (
    <ErrorControl>{children}</ErrorControl>
  ) : (
    <ErrorPage text="Your access level is not sufficient to use this route" />
  );
};

export default AccessControl;
