import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Formik } from "formik";
import Controls from "./Controls";

const ControlsContainer = () => {
  const searchParams = useSearchParams();

  const initialParams = {
    page: searchParams.get("page") ?? 1,
    per: searchParams.get("per") ?? 5,
    search: searchParams.get("search") ?? "",
    sort: searchParams.get("sort") ?? "created_at_asc",
  };

  const handleLocalStorage = useCallback(() => {
    try {
      localStorage.clear();
    } catch {
      return;
    }
  }, []);

  useEffect(() => {
    handleLocalStorage();
  }, [handleLocalStorage]);

  return (
    <Formik
      initialValues={initialParams}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={() => {}}
    >
      <Controls />
    </Formik>
  );
};

export default ControlsContainer;
