const validate = async (schema, data, context) => {
  let errors = null;

  try {
    await schema.validate(data, { abortEarly: false, context });
  } catch (validationErrorrs) {
    errors = validationErrorrs.inner.reduce((errorsAcc, { path, errors }) => {
      errorsAcc[path] = errors;
      return errorsAcc;
    }, {});
  }

  return errors;
};

export default validate;
