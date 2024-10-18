"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/models";

const ReduxProvider = ({ preloadedState, children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState);
  }

  return <Provider store={storeRef.current} children={children} />;
};

export default ReduxProvider;
