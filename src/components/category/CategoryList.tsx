import { FC } from 'react';
import { Category } from 'model';
import { CategoryItem } from './CategoryItem';
import { Masonry } from '@mui/lab';

type Props = {
  categories: Category[];
};

export const CategoryList: FC<Props> = (props) => {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }} sx={{ alignContent: 'flex-start' }}>
      {props.categories.map((category) => (
        <CategoryItem key={category.id} title={category.title} />
      ))}
    </Masonry>
  );
};
