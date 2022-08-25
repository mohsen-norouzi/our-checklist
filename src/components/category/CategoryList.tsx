import { FC, useEffect } from 'react';
import { Masonry } from '@mui/lab';

import { useGetCategoriesByTeamQuery } from 'redux/slices/api-slice';
import { CategoryItem } from './CategoryItem';
import { useAppSelector } from 'redux/hooks';

type Props = {
  // categories: Category[];
};

export const CategoryList: FC<Props> = (props) => {
  const teamId = useAppSelector((state) => state.team.teamId);
  const { data, isLoading } = useGetCategoriesByTeamQuery(teamId!);

  console.log('teamId', teamId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No Data</h1>;
  }

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }} sx={{ alignContent: 'flex-start' }}>
      {data.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Masonry>
  );
};
