import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormikContext } from "formik";
import TestsController from "./TestsController";

const TestsControllerContainer = () => {
  const { values } = useFormikContext();
  const router = useRouter();

  const getQueryString = useCallback((values) => {
    const params = new URLSearchParams();
    for (const param in values) {
      if (values[param]) params.set(param, values[param]);
    }
    return `?${params.toString()}`;
  }, [values]);

  useEffect(() => {
    router.push(getQueryString(values));
  }, [getQueryString, values]);

  return <TestsController />;
};

export default TestsControllerContainer;
