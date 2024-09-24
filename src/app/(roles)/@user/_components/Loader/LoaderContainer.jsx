"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";

const LoaderContainer = ({ children }) => {
    const isLoading = useAppSelector(testsSelectors.selectIsLoading);
    return isLoading && children;
};

export default LoaderContainer;
