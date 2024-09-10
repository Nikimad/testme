"use client";

import { useSearchParams } from "next/navigation";
import { Formik } from "formik";

const SearchbarContainer = ({ children }) => {
  const searchParams = useSearchParams();
  return (
    <Formik
      initialValues={{
        per: searchParams.get("per") || "5",
        search: searchParams.get("search") || "",
        sort: searchParams.get("sort") || "created_at_asc",
      }}
      validateOnBlur={false}
      validateOnChange={false}
      children={children}
    />
  );
};

export default SearchbarContainer;
