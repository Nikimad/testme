"use client";

import { useAppSelector } from "@/models/hooks";
import { selectError, selectIsLoading } from "@/models/tests/selectors";

const Status = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
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
