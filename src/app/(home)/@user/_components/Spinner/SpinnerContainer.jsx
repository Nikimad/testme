"use client";

import Loader from "@/components/Loader";
import { testsSelectors } from "@/models/tests/selectors";

const SpinnerContainer = ({ children }) => (
  <Loader
    isLoadingSelector={testsSelectors.selectIsLoading}
    children={children}
  />
);

export default SpinnerContainer;
