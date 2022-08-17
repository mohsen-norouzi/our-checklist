import { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, IconButton } from '@mui/material';

import { TodoList } from 'components/todo/TodoList';
import { useGetTodosQuery } from 'api/api-slice';
import { CircularStatic } from './CircularStatic';

type Props = {
  // id: string;
  title: string;
  // icon: string;
  // color: string;
};

export const CategoryItem: FC<Props> = (props) => {
  const { data: todosResult, isLoading } = useGetTodosQuery();

  return (
    <Card className='w-full cursor-pointer hover:shadow-xl animated fadeInUp !rounded-2xl'>
      <CardHeader
        avatar={<Avatar aria-label='recipe'>R</Avatar>}
        action={<CircularStatic />}
        title={props.title}
        className='border-b-2 border-x-neutral-300'
      />

      <CardContent>
        <TodoList todos={todosResult?.data} />
      </CardContent>
    </Card>
  );
};
