"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import useAction from "@/hooks/useAction";
import { testsSelectors } from "@/models/tests/selectors";
import { testsActions } from "@/models/tests";
import { Formik } from "formik";
import Placeholder from "@/components/Placeholder";
import TestsController from "@/components/TestsController";
import TestsList from "@/components/TestsList";

const TestsPage = () => {
  const searchParams = useSearchParams();

  const tests = useSelector(testsSelectors.selectTests);
  const isLoading = useSelector(testsSelectors.selectIsLoading);

  const getTests = useAction(testsActions.getTests);

  const initialParams = {
    page: searchParams.get("page") ?? 1,
    per: searchParams.get("per") ?? 5,
    search: searchParams.get("search") ?? "",
    sort: searchParams.get("sort") ?? "created_at_asc",
  };

  useEffect(() => {
    getTests(searchParams.toString().toLowerCase());
  }, [searchParams]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Formik
        initialValues={initialParams}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={() => {}}
        component={TestsController}
      />
      <Placeholder isLoading={isLoading}>
        <TestsList tests={tests} />
      </Placeholder>
    </>
  );
};

export default TestsPage;
