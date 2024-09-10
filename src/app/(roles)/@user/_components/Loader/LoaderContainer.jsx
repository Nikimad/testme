"use client";

import { useAppSelector } from "@/models/hooks";
import { selectIsLoading } from "@/models/tests/selectors";

const LoaderContainer = ({ children }) => {
    const isLoading = useAppSelector(selectIsLoading);
    return isLoading && children;
};

export default LoaderContainer;
