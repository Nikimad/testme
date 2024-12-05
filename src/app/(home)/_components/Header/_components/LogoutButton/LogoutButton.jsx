import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAction } from "@/models/hooks";
import { authorizationActions } from "@/models/authorization";

const LogoutButton = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const logout = useAction(authorizationActions.logout);

  const handleLogout = useCallback(() => {
    logout();
    pathname !== "/" && push("/");
  }, [pathname, logout, push]);

  return (
    <button type="button" className="pill" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default LogoutButton;
