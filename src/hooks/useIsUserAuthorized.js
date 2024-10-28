import { authorizationSelectors } from "@/models/authorization/selectors";
import { useAppSelector } from "@/models/hooks";

const useIsUserAuthorized = () => {
  const isUserAuthorized = useAppSelector(
    authorizationSelectors.selectIsUserAuthorized
  );
  return isUserAuthorized;
};

export default useIsUserAuthorized;
