import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import AuthForm from "./AuthForm";
import { authSelectors } from "@/models/auth/selectors";
import { useEffect, useRef } from "react";

const AuthFormContainer = ({ title, children }) => {
  const router = useRouter();
  const errorStorage = useRef(null);
  const isUserAuthorized = useSelector(authSelectors.selectIsUserAuthorized);
  const isAuthLoading = useSelector(authSelectors.selectIsLoading);
  const error = useSelector(authSelectors.selectError);

  useEffect(() => {
    if (isAuthLoading) {
      errorStorage.current = null;
    }
  }, [isAuthLoading]);

  useEffect(() => {
    if (error) {
      errorStorage.current = error;
    }
  }, [error]);

  useEffect(() => {
    if (isUserAuthorized) {
        setTimeout(() => router.push("/"), 5000);
    }
  }, [isUserAuthorized]);

  return (
    <AuthForm
      error={errorStorage.current}
      isLoading={isAuthLoading}
      isSuccess={isUserAuthorized}
      title={title}
      children={children}
    />
  );
};

export default AuthFormContainer;
