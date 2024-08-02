import { useState, useEffect } from "react";

const useLoading = (initialIsLoading) => {
  const [isLoading, setIsLoading] = useState(initialIsLoading);

  useEffect(() => {
    if (isLoading && !initialIsLoading) setIsLoading(false);
  }, [initialIsLoading]);

  return isLoading;
};

export default useLoading;
