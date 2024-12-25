import set from "lodash/set";

const getValues = (data) => {
  const iterableData =
    typeof data?.[Symbol.iterator] === "function"
      ? data
      : {
          ...data,
          [Symbol.iterator]: function* () {
            for (let key in this) {
              yield [key, this[key]];
            }
          },
        };

  const values = {};

  for (let [key, value] of iterableData) {
    if (key.startsWith("$")) continue;
    set(values, key.split("."), value);
  }

  return values;
};

export default getValues;
