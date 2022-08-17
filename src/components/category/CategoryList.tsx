import { FC } from 'react';
import { Category } from 'model';
import { CategoryItem } from './CategoryItem';

type Props = {
  items: Category[];
};

export const CategoryList: FC<Props> = (props) => {
  return (
    <>
      {props.items.map((category) => (
        <CategoryItem key={category.id} title={category.title} />
      ))}
    </>
  );
};
