import { usePathname } from "next/navigation";
import { useCallback } from "react";

const useWindowRouter = () => {
  const pathname = usePathname();

  const createURL = useCallback(
    (query) => `${pathname}${query ? `?${query}` : ""}`,
    [pathname]
  );

  const push = useCallback(
    (query) => window.history.pushState(null, "", createURL(query)),
    [createURL]
  );
  const replace = useCallback(
    (query) => window.history.replaceState(null, "", createURL(query)),
    [createURL]
  );

  return {
    push,
    replace,
  };
};

export default useWindowRouter;
