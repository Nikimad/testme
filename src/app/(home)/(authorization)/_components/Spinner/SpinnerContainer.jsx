"use client";

import Loader from "@/components/Loader";
import { authorizationSelectors } from "@/models/authorization/selectors";

const SpinnerContainer = ({ children }) => (
  <Loader
    isLoadingSelector={authorizationSelectors.selectIsLoading}
    children={children}
  />
);

export default SpinnerContainer;
