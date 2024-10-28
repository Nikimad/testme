"use client";

import { authorizationSelectors } from "@/models/authorization/selectors";
import { useAppSelector } from "@/models/hooks";

const UserProvider = ({ user, children }) => {
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );
  return isUserAuthorized ? user : children;
};

export default UserProvider;
