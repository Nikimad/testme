"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";

const Status = () => {
  const isLoading = useAppSelector(testsSelectors.selectIsLoading);
  const error = useAppSelector(testsSelectors.selectError);
  return isLoading ? (
    "Loading..."
  ) : error ? (
    <>
      {error}
      <br />
      Check search parametrs
    </>
  ) : (
    "No tests yet"
  );
};

export default Status;
