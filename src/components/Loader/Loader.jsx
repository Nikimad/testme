"use client";

import { useAppSelector } from "@/models/hooks";

const Loader = ({ isLoadingSelector, children }) => {
  const isLoading = useAppSelector(isLoadingSelector);
  return isLoading && children;
};

export default Loader;
