const getData = (formData) => {
  const data = {};

  for (let [key, value] of formData.entries()) {
    if (key.startsWith("$")) continue;
    data[key] = value;
  }

  return data;
};

export default getData;
