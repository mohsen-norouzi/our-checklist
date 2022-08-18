import { FC } from 'react';
import { Icon, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { useUpdateTodoMutation } from 'api/api-slice';
import { Todo } from 'model';

type Props = {
  todo: Todo;
  color: string;
};

export const TodoItem: FC<Props> = ({ todo, color }) => {
  const [updatePost, result] = useUpdateTodoMutation();

  const handleClick = () => {
    updatePost({ id: todo.id, done: !todo.done });
  };

  return (
    <ListItem className='hover:bg-gray-100 cursor-pointer rounded-full'>
      <ListItemIcon onClick={handleClick}>
        {todo.done ? (
          <Icon sx={{ color: color }}>check_circle</Icon>
        ) : (
          <Icon>radio_button_unchecked</Icon>
        )}
      </ListItemIcon>
      <ListItemText primary={todo.title} />
      <IconButton edge='end' aria-label='delete' size='small'>
        <Icon fontSize='small'>delete</Icon>
      </IconButton>
    </ListItem>
  );
};
