import { FormControl, Icon, IconButton, Input, ListItem, ListItemIcon } from '@mui/material';
import { useAddTodoMutation } from 'api/api-slice';
import { FC, useState } from 'react';

type Props = {
  categoryId: number;
};

export const TodoForm: FC<Props> = (props) => {
  const [addTodo, addTodoResult] = useAddTodoMutation();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ title, category: props.categoryId }).then(() => {
      setTitle('');
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ListItem className='rounded-full'>
        <ListItemIcon>
          <Icon>add</Icon>
        </ListItemIcon>
        <FormControl size='small' className='w-full !mr-5' sx={{ outline: 'none !important' }}>
          <Input sx={{ outline: 'none !important' }} value={title} onChange={handleChange} />
        </FormControl>
        <IconButton
          edge='end'
          aria-label='delete'
          size='small'
          disabled={title.trim().length === 0}
          type='submit'
        >
          <Icon fontSize='small'>check</Icon>
        </IconButton>
      </ListItem>
    </form>
  );
};
