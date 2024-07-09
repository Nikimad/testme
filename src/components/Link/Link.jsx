"use client";

import cn from "classnames";
import NextLink from "next/link";
import s from "./Link.module.scss";

const Link = ({ className, ...props }) => <NextLink className={cn(s.link, className ?? "")}  {...props} />;

export default Link;