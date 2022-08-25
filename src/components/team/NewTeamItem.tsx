import { Button, Card, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import clsx from 'clsx';

export const NewTeamItem = () => {
  const [editMode, setEditMode] = useState(false);

  const handleOpenForm = () => {
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  return (
    <Card
      sx={{ width: 250, height: 300 }}
      className={clsx('cursor-pointer transition-all flex items-center justify-center p-5 ', {
        'hover:bg-neutral-100': !editMode,
      })}
    >
      {editMode ? (
        <form>
          <FormControl className='w-full'>
            <TextField label='Title' size='small' />
          </FormControl>

          <FormControl className='w-full !mt-2' size='small'>
            <TextField label='Description' size='small' multiline rows={3} />
          </FormControl>

          <Button className='w-full !mt-2' variant='contained'>
            Add
          </Button>
          <Button
            className='w-full !mt-2'
            variant='outlined'
            color='info'
            onClick={handleCloseForm}
          >
            Cancel
          </Button>
        </form>
      ) : (
        <Box
          component='div'
          onClick={handleOpenForm}
          className='w-full h-full flex items-center justify-center'
        >
          <Typography variant='h2' color='GrayText'>
            +
          </Typography>
        </Box>
      )}
    </Card>
  );
};
