import getValues from "./getValues";

const handleFormSubmit = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  return {
    form,
    values: getValues(formData),
  };
};

export default handleFormSubmit;
