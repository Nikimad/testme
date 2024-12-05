"use client";

import { useCallback, useEffect } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { useFormikContext } from "formik";
import { authorizationSelectors } from "@/models/authorization/selectors";
import { authorizationActions } from "@/models/authorization";

const FieldsContainer = ({ children }) => {
  const { setErrors } = useFormikContext();
  const error = useAppSelector(authorizationSelectors.selectError);
  const resetAuthorization = useAction(authorizationActions.setUser);

  const handleErrors = useCallback(
    (error) => {
      const errors = {
        ...(typeof error === "string" ? { isSignup: error } : error),
      };
      setErrors(errors);
      resetAuthorization(null);
    },
    [setErrors, resetAuthorization]
  );

  useEffect(() => {
    error && handleErrors(error); 
  }, [handleErrors, error]);

  return children;
};

export default FieldsContainer;
