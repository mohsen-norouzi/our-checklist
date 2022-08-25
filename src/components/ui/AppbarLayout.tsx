import { AppBar, Box, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { appActions } from 'redux/slices/app-slice';

export const AppbarLayout = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.app.mode);

  const handleToggleMode = () => {
    dispatch(appActions.toggleMode());
  };

  return (
    <AppBar position='static' color='transparent' className='text-black' sx={{ boxShadow: 'none' }}>
      <Toolbar className='!pl-2'>
        <Link to='/'>
          <Typography
            variant='h5'
            className={clsx('text-center w-60 mx-2', {
              fixed: location.pathname === 'about',
            })}
            component='div'
            color='text.primary'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Our Checklist
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Box>
          <Link to='/teams'>
            <IconButton size='medium'>
              <Icon>people</Icon>
            </IconButton>
          </Link>
          <IconButton size='medium' onClick={handleToggleMode}>
            {mode === 'light' ? <Icon>light_mode</Icon> : <Icon>dark_mode</Icon>}
          </IconButton>
          <IconButton size='medium'>
            <Icon>person</Icon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
