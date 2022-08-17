import { FC } from 'react';
import { Category } from 'model';
import { CategoryItem } from './CategoryItem';

type Props = {
  categories: Category[];
};

export const CategoryList: FC<Props> = (props) => {
  return (
    <>
      {props.categories.map((category) => (
        <CategoryItem key={category.id} title={category.title} />
      ))}
    </>
  );
};
