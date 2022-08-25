import React, { FC } from 'react';
import { Box } from '@mui/system';

import { AppbarLayout } from './AppbarLayout';

type Props = {
  children?: React.ReactNode;
};

export const Layout: FC<Props> = (props) => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: 'background.default' }}
      className='w-screen min-h-screen flex flex-col justify-items-stretch h-full'
    >
      <AppbarLayout />
      
      {props.children}
    </Box>
  );
};
