import { FC } from 'react';
import { Box } from '@mui/material';

import { useUpdateCategoryMutation } from 'api/api-slice';
import { Category } from 'model';

import { CircularStatic } from './CircularStatic';
import { CategoryTitleForm } from './CategoryTitleForm';

import { CategoryIconForm } from './CategoryIconForm';

type Props = {
  category: Category;
  stats: { total: number; done: number };
  onToggleTodos: () => void;
};

export const CategoryHeader: FC<Props> = (props) => {
  const [updateCategory, updateResult] = useUpdateCategoryMutation();

  const handleUpdate = (title: string) => {
    const data: any = { title, id: props.category.id };
    updateCategory(data);
  };

  const onIconPickHandler = (icon: string, color: string) => {
    const data: any = { id: props.category.id, icon, color };
    updateCategory(data);
  };

  return (
    <Box
      component='div'
      className='flex items-center justify-between px-5 py-3 border-b border-b-neutral-300'
    >
      <CategoryIconForm
        icon={props.category.icon}
        color={props.category.color}
        onPick={onIconPickHandler}
      />

      <CategoryTitleForm title={props.category.title} onUpdate={handleUpdate} />

      <CircularStatic color={props.category.color} stats={props.stats} onToggleTodos={props.onToggleTodos}/>
    </Box>
  );
};
