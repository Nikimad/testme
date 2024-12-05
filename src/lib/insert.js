const insert = (array, from, to) => {
  if (from === to) return array;
  const newArray = array.filter((_, i) => i !== from);
  return [...newArray.slice(0, to), array[from], ...newArray.slice(to)];
};

export default insert;
