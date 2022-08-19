import { FC } from 'react';
import { Avatar, Box, Icon } from '@mui/material';

import { useUpdateCategoryMutation } from 'api/api-slice';
import { Category } from 'model';

import { CircularStatic } from './CircularStatic';
import { CategoryTitleForm } from './CategoryTitleForm';

type Props = {
  category: Category;
  stats: { total: number; done: number };
};

export const CategoryHeader: FC<Props> = (props) => {
  const [updateCategory, updateResult] = useUpdateCategoryMutation();

  const handleUpdate = (title: string) => {
    const data: any = { title, id: props.category.id };
    updateCategory(data);
  };

  return (
    <Box
      component='div'
      className='flex items-center justify-between px-5 py-3 border-b border-b-neutral-300'
    >
      <Avatar sx={{ bgcolor: props.category.color }}>
        <Icon>{props.category.icon}</Icon>
      </Avatar>

      <CategoryTitleForm title={props.category.title} onUpdate={handleUpdate} />

      <CircularStatic color={props.category.color} stats={props.stats} />
    </Box>
  );
};
