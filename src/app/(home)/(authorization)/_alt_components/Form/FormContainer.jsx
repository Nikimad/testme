"use client";

import { useActionState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAction } from "@/models/hooks";
import { authorizationActions } from "@/models/authorization";
import { initialState } from "../../_lib/initialState";
import sign from "../../_lib/sign";
import Form from "./Form";

const FormContainer = () => {
  const isSignUp = usePathname() === "/signup";
  const [state, action, isLoading] = useActionState(sign, {
    ...initialState,
    context: { isSignUp },
  });

  const setUser = useAction(authorizationActions.setUser);

  useEffect(() => {
    state.user && setUser(state.user);
  }, [state.user, setUser])


  return (
    <Form
      title={isSignUp ? "up" : "in"}
      action={action}
      isSignUp={isSignUp}
      isLoading={isLoading}
      isSuccess={state.success}
      values={state.data}
      errors={state.errors}
    />
  );
};

export default FormContainer;
