import React, { FC, useEffect } from 'react';

import { useAppDispatch } from 'redux/hooks';
import { userActions } from 'redux/slices/user-slice';

type AuthProps = {
  children?: React.ReactNode;
};

export const AuthProvider: FC<AuthProps> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.authenticate());
  }, []);

  return <>{props.children}</>;
};
