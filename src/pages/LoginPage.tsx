import { useEffect } from 'react';
import { Button, TextField } from '@mui/material';

import { useAppDispatch } from 'redux/hooks';
import { useLoginMutation } from 'redux/slices/api-slice';
import { userActions } from 'redux/slices/user-slice';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [login, loginResult] = useLoginMutation();

  const handleLogin = () => {
    login({ identifier: 'mohsen', password: 'mohsen' });
  };

  useEffect(() => {
    if (loginResult.data) {
      console.log(loginResult.data);
      dispatch(userActions.login(loginResult.data.jwt));
    }
  }, [loginResult]);

  return (
    <form>
      <TextField placeholder='Username' />
      <TextField placeholder='Password' />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
};
