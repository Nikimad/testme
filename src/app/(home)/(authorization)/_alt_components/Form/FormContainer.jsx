"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAction, useAppSelector } from "@/models/hooks";
import { authorizationActions } from "@/models/authorization";
import { authorizationSelectors } from "@/models/authorization/selectors";
import handleFormSubmit from "@/lib/handleFormSubmit";
import Form from "./Form";

const FormContainer = () => {
  const isSignUp = usePathname() === "/signup";

  const isLoading = useAppSelector(authorizationSelectors.selectIsLoading);
  const errors = useAppSelector(authorizationSelectors.selectError);

  const signin = useAction(authorizationActions.signin);
  const signup = useAction(authorizationActions.signup);

  const handleSubmit = useCallback((e) => {
    const { values } = handleFormSubmit(e);
    const action = isSignUp ? signup : signin;
    action(values);
  }, [isSignUp, handleFormSubmit, signup, signin])


  return (
    <Form
      title={isSignUp ? "up" : "in"}
      onSubmit={handleSubmit}
      isSignUp={isSignUp}
      isLoading={isLoading}
      errors={errors}
    />
  );
};

export default FormContainer;
