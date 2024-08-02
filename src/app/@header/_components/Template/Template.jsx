"use client";

import { useAppSelector } from "@/models/hooks";
import useLoading from "@/hooks/useLoading";
import { authSelectors } from "@/models/auth/selectors";
import Spinner from "@/components/Spinner";
import LogoutButton from "../LogoutButton";
import s from "./Template.module.scss";


const Template = ({ children }) => {
  const isUserLoading = useAppSelector(authSelectors.selectIsLoading);
  const isUserAuthorized = useAppSelector(authSelectors.selectIsUserAuthorized);

  const isLoading = useLoading(isUserLoading);

  return isLoading ? (
    <Spinner action="Authentication" className={s.spinner} />
  ) : isUserAuthorized ? (
    <LogoutButton />
  ) : (
    children
  );
};

export default Template;
