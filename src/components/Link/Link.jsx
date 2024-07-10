"use client";

import cn from "classnames";
import NextLink from "next/link";
import s from "./Link.module.scss";

const Link = ({ className, linkref, ...props }) => <NextLink ref={linkref} className={cn(s.link, className ?? "")}  {...props} />;

export default Link;