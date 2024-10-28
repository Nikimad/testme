import { createContext } from "react";

const InertContext = createContext({
  setInert: () => {},
  removeInert: () => {},
});

export default InertContext;
