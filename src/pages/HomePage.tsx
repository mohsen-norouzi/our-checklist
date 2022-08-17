import { useGetTeamsQuery } from 'api/api-slice';

export const HomePage = () => {
  const { data, isLoading } = useGetTeamsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log('data', data);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
