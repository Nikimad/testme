import { useCallback } from "react";
import debounce from "lodash/debounce";

const useDebounce = (...args) => useCallback(debounce(...args), [debounce]);

export default useDebounce;
