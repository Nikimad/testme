"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { authSelectors } from "@/models/auth/selectors";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
    const router = useRouter();

    const authIsLoading = useSelector(authSelectors.selectIsLoading);

    const handleStart = () => router.push("/signin");

    return <Dashboard onStart={handleStart} isLoading={authIsLoading} />;
};

export default DashboardContainer;
