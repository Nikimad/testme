"use client";

import { useRef } from "react";
import { useSearchParams } from "next/navigation";
import SearchContext from "./SearchContext";

const SearchContextContainer = ({ children }) => {
  const _searchParams = useSearchParams();

  const getInitialQuery = (params) => {
    const queryParams = new URLSearchParams(params);
    for (const paramKey in params) {
      params[paramKey] || queryParams.delete(paramKey);
    }
    return queryParams.toString();
  };

  const getInitial = (userSearchParams) => {
    const userPer = Number(userSearchParams.get("per"));
    const userPage = Number(userSearchParams.get("page"));
    const userSort = userSearchParams.get("sort");
    const userSearch = userSearchParams.get("search");

    const initialData = {
      per: (userPer && (userPer < 1 ? 1 : userPer)) || null,
      page: (userPage && (userPage < 1 ? 1 : userPage)) || null,
      sort: ["created_at_asc", "created_at_desc"].includes(userSort)
        ? userSort
        : null,
      search: userSearch,
    };

    return {
      query: getInitialQuery(initialData),
      values: {
        page: initialData.page || 1,
        per: initialData.per || 5,
        search: initialData.search || "",
        sort: initialData.sort || "created_at_desc",
      },
    };
  };

  const initial = useRef(getInitial(_searchParams));

  return (
    <SearchContext
      values={initial.current.values}
      query={initial.current.query}
      children={children}
    />
  );
};

export default SearchContextContainer;
