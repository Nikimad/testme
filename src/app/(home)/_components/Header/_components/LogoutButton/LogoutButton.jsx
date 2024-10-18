import { useAction } from "@/models/hooks";
import { authorizationActions } from "@/models/authorization";

const LogoutButton = () => {
  const logout = useAction(authorizationActions.logout);
  return (
    <button type="button" className="pill" onClick={() => logout()}>
      Log out
    </button>
  );
};

export default LogoutButton;
