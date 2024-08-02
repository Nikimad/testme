'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/models';
import { authActions } from '@/models/auth';

const ReduxProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(authActions.getUser());
  }

  return <Provider store={storeRef.current}>{children}</Provider>
};

export default ReduxProvider;