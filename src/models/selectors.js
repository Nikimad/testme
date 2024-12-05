import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (rootSelector) =>
  createSelector(rootSelector, ({ isLoading }) => isLoading);
export const selectError = (rootSelector) =>
  createSelector(rootSelector, ({ error }) => error);
