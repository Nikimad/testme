import { memo } from "react";
import { Formik } from "formik";

const SearchContext = memo(({ query, values, children }) => (
  <Formik
    initialStatus={query}
    initialValues={values}
    validateOnBlur={false}
    validateOnChange={false}
    children={children}
  />
));

export default SearchContext;
