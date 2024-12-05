"use client";

import { useCallback, useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import TestRedactorProvider from "../TestRedactorProvider";

const Editor = ({ params: { testId } }) => {
  const [isTestDelete, setIsTestDelete] = useState(false);
  const { back } = useRouter();
  const isLoading = useAppSelector(testsSelectors.selectIsLoading);
  const test =
    useAppSelector((state) => testsSelectors.selectById(state, testId)) || {};

  const handleDelete = useCallback(
    () => isTestDelete || setIsTestDelete(true),
    [isTestDelete]
  );

  !isTestDelete && !test.id && notFound();

  useEffect(() => {
    isTestDelete && !isLoading && back();
  }, [isTestDelete, isLoading, back]);

  return isTestDelete && isLoading ? null : (
    <TestRedactorProvider test={test} onDelete={handleDelete} />
  );
};

export default Editor;
