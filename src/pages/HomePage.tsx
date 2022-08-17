import { useGetCategoriesQuery } from 'api/api-slice';
import { CategoryList } from 'components/category';

export const HomePage = () => {
  const { data: result, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!result) {
    return <h1>No Data</h1>;
  }

  console.log('data', result.data);
  return (
    <div>
      <h1>Home Page</h1>

      <CategoryList items={result.data} />
    </div>
  );
};
