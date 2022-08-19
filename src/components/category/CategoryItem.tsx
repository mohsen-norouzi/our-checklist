import { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { TodoList } from 'components/todo/TodoList';
import { CategoryHeader } from './CategoryHeader';

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
      <CategoryHeader category={props.category} stats={stats} />

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
