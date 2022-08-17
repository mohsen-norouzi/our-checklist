import { FC } from 'react';
import { Masonry } from '@mui/lab';

import { useGetCategoriesQuery } from 'api/api-slice';
import { CategoryItem } from './CategoryItem';

type Props = {
  // categories: Category[];
};

export const CategoryList: FC<Props> = (props) => {
  const { data: categoriesResult, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!categoriesResult) {
    return <h1>No Data</h1>;
  }

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }} sx={{ alignContent: 'flex-start' }}>
      {categoriesResult.data.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Masonry>
  );
};
