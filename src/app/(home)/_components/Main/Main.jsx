"use client";

import { useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/authorization/selectors";

const Main = ({ user, children }) => {
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );

  return isUserAuthorized ? user : children;
};

export default Main;
