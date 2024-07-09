import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAction from "./useAction";
import { authActions } from "@/models/auth";
import { authSelectors } from "@/models/auth/selectors";

const useAuth = () => {
    const isUserAuthorized = useSelector(authSelectors.selectIsUserAuthorized);
    const getUser = useAction(authActions.getUser);

    useEffect(() => {
        if (!isUserAuthorized) getUser();
    }, []);

    return isUserAuthorized;
};

export default useAuth;
