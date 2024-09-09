"use client";

import ReduxProvider from "../ReduxProvider";
import InertProvider from "../InertProvider";

const Providers = ({ children }) => (
  <ReduxProvider>
    <InertProvider>
      { children }
    </InertProvider>
  </ReduxProvider>
);

export default Providers;
