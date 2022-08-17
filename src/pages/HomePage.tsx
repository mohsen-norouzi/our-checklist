import { useGetCategoriesQuery } from 'api/api-slice';
import { CategoryList } from 'components';

export const HomePage = () => {
  const { data: categoriesResult, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!categoriesResult) {
    return <h1>No Data</h1>;
  }

  return (
    <div className='flex flex-wrap gap-2 mx-2 p-5'>
      <CategoryList categories={categoriesResult.data} />
    </div>
  );
};
