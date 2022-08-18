import { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CardHeader, Icon } from '@mui/material';

import { TodoList } from 'components/todo/TodoList';
import { CircularStatic } from './CircularStatic';
import { Category } from 'model';

type Props = {
  category: Category;
};

export const CategoryItem: FC<Props> = (props) => {
  const [stats, setStats] = useState({ total: 0, done: 0 });

  const handleUpdateStats = (total: number, done: number) => {
    setStats({ total, done });
  };

  return (
    <Card className='w-full animated fadeInUp !rounded-2xl'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: props.category.color }}>
            <Icon>{props.category.icon}</Icon>
          </Avatar>
        }
        action={<CircularStatic color={props.category.color} stats={stats} />}
        title={props.category.title}
        className='border-b-2 border-x-neutral-300'
      />

      <CardContent sx={{ '&:last-child': { pb: '16px' } }}>
        <TodoList
          categoryId={props.category.id}
          color={props.category.color}
          updateStats={handleUpdateStats}
        />
      </CardContent>
    </Card>
  );
};
