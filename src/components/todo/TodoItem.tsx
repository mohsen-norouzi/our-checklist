import { Icon, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  done: boolean;
  color: string;
};

export const TodoItem: FC<Props> = (props) => {
  return (
    <ListItem className='hover:bg-gray-100 cursor-pointer rounded-full'>
      <ListItemIcon>
        {props.done ? (
          <Icon sx={{ color: props.color }}>check_circle</Icon>
        ) : (
          <Icon>radio_button_unchecked</Icon>
        )}
      </ListItemIcon>
      <ListItemText primary={props.title} />
      <IconButton edge='end' aria-label='delete' size='small'>
        <Icon fontSize='small'>delete</Icon>
      </IconButton>
    </ListItem>
  );
};
