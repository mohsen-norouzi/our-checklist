import { FC, useEffect, useState } from 'react';
import { Icon, IconButton, Input, ListItem, ListItemIcon } from '@mui/material';

import { useDeleteTodoMutation, useUpdateTodoMutation } from 'api/api-slice';
import { useDebounce } from 'hooks';
import { Todo } from 'model';

type Props = {
  todo: Todo;
  color: string;
};

export const TodoItem: FC<Props> = ({ todo, color }) => {
  const [updateTodo, updateResult] = useUpdateTodoMutation();
  const [deleteTodo, deleteResult] = useDeleteTodoMutation();

  const [title, setTitle] = useState(todo.title);
  const debouncedTitle = useDebounce<string>(title, 500);

  const handleToggleDone = () => {
    updateTodo({ id: todo.id, done: !todo.done });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (debouncedTitle.trim() !== '') {
      updateTodo({ id: todo.id, title: debouncedTitle });
    }
  }, [debouncedTitle]);

  return (
    <ListItem className='hover:bg-gray-100 rounded-full'>
      <ListItemIcon onClick={handleToggleDone} className='cursor-pointer'>
        {todo.done ? (
          <Icon sx={{ color: color }}>check_circle</Icon>
        ) : (
          <Icon>radio_button_unchecked</Icon>
        )}
      </ListItemIcon>
      <Input value={title} disableUnderline className='w-full' onChange={handleChange} />
      <IconButton
        edge='end'
        aria-label='delete'
        size='small'
        onClick={handleDelete}
        className='hover:text-rose-500 cursor-pointer'
      >
        <Icon fontSize='small'>delete</Icon>
      </IconButton>
    </ListItem>
  );
};
