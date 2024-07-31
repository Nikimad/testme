"use client";

import { useSelector } from "react-redux";
import { authSelectors } from "@/models/auth/selectors";
import Spinner from "@/components/Spinner";
import SigninLink from "../SigninLink";
import SignupLink from "../SignupLink";
import LogoutButton from "../LogoutButton";

const Controls = () => {
  const isAuthorizeLoading = useSelector(authSelectors.selectIsLoading);
  const isUserAuthorized = useSelector(authSelectors.selectIsUserAuthorized);

  return isAuthorizeLoading ? (
    <Spinner action="Authorize" size={54} />
  ) : isUserAuthorized ? (
    <LogoutButton />
  ) : (
    <>
      <SigninLink />
      <SignupLink />
    </>
  );
};

export default Controls;
