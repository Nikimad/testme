import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormikContext } from "formik";

const Router = () => {
  const router = useRouter();
  const { values } = useFormikContext();

  const getQueryString = useCallback(
    (values) => {
      const params = new URLSearchParams();
      for (const param in values) {
        if (values[param]) params.set(param, values[param]);
      }
      return `?${params.toString()}`;
    },
    []
  );

  useEffect(() => {
    router.push(getQueryString(values));
  }, [getQueryString, values]);

  return null;
};

export default Router;
