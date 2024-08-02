import { useCallback } from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
export const useAppStore = useStore.withTypes();
export const useAction = (action) => {
  const dispatch = useAppDispatch();
  const dispatchAction = useCallback(
    (state) => dispatch(action(state)),
    [dispatch, action]
  );
  return dispatchAction;
};
