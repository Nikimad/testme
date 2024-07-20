import { useCallback, useEffect } from "react";
import { useFormikContext } from "formik";
import { Form as FormikForm } from "formik";

const Form = ({ id, children }) => {
  const { values: answers, errors, status } = useFormikContext();

  const handleBeforeunload = useCallback(
    (e) => {
      e.preventDefault();
      try {
        localStorage.setItem(id, JSON.stringify({ answers, errors, status }));
      } catch {
        return;
      }
      e.returnValue = "";
    },
    [id, answers, errors, status]
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeunload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
    };
  }, [handleBeforeunload]);

  return <FormikForm>{children}</FormikForm>;
};

export default Form;
