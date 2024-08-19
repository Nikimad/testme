"use client";

import { authSelectors } from "@/models/auth/selectors";
import { useAppSelector } from "@/models/hooks";

const NavigationRolesLayout = ({ children, guest, user }) => {
    const isUserAuthenticated = useAppSelector(authSelectors.selectIsUserAuthenticated);
    const isUserAuthorized = useAppSelector(authSelectors.selectIsUserAuthorized);
    
    return !isUserAuthenticated ? children : !isUserAuthorized ? guest : user;
};

export default NavigationRolesLayout;
