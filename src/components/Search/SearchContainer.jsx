import { Formik } from "formik";
import Search from "./Search";

const SearchContainer = ({ inputClassName, buttonClassName }) => {
  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{ query: "" }}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      <Search inputClassName={inputClassName} buttonClassName={buttonClassName} />
    </Formik>
  );
};

export default SearchContainer;
