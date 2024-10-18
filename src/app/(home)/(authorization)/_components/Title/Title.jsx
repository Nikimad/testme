"use client";

import { usePathname } from "next/navigation";

const Title = () => usePathname() === "/signin" ? "Sign in" : "Sign up"; 

export default Title;
