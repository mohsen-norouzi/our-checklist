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

  console.log('data', categoriesResult.data);
  return (
    <div>
      <h1>Home Page</h1>

      <CategoryList categories={categoriesResult.data} />
    </div>
  );
};
