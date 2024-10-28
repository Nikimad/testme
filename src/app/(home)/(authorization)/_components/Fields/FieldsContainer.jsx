"use client";

import { useEffect } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { useFormikContext } from "formik";
import { authorizationSelectors } from "@/models/authorization/selectors";
import { authorizationActions } from "@/models/authorization";

const FieldsContainer = ({ children }) => {
  const { setErrors } = useFormikContext();
  const error = useAppSelector(authorizationSelectors.selectError);
  const resetAuthorization = useAction(authorizationActions.success);

  useEffect(() => {
    if (error) {
      setErrors({ isSignup: error });
      resetAuthorization();
    }
  }, [setErrors, resetAuthorization, error]);

  return children;
};

export default FieldsContainer;
