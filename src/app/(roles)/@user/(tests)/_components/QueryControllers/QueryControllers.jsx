"use client";

import QueryLimiter from "../QueryLimiter";
import QuerySender from "../QuerySender";

const QueryControllers = () => (
  <>
    <QuerySender />
    <QueryLimiter />
  </>
);

export default QueryControllers;
