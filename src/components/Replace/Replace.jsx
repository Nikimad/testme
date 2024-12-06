"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Replace = () => {
    const { replace } = useRouter();
    useEffect(() => { replace("/"); }, [replace]);
};

export default Replace;
