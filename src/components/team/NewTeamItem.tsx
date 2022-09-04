import React, { useState } from 'react';
import { Button, Card, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';

import { Team } from 'model';
import { useAddTeamMutation } from 'redux/slices/api-slice';

const emptyForm = {
  title: '',
  description: '',
  image: { url: '' },
};

export const NewTeamItem = () => {
  const [addTeam, addTeamResult] = useAddTeamMutation();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<Team>(emptyForm);

  const handleOpenForm = () => {
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTeam(formData);
    setEditMode(false);
    setFormData(emptyForm);
  };

  return (
    <Card
      sx={{ width: 250, height: 300 }}
      className={clsx('cursor-pointer transition-all flex items-center justify-center p-5 ', {
        'hover:bg-neutral-100': !editMode,
      })}
    >
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <FormControl className='w-full'>
            <TextField label='Title' size='small' name='title' onChange={handleChange} />
          </FormControl>

          <FormControl className='w-full !mt-2' size='small'>
            <TextField
              label='Description'
              size='small'
              multiline
              rows={3}
              name='description'
              onChange={handleChange}
            />
          </FormControl>

          <Button className='w-full !mt-2' variant='contained' type='submit'>
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
