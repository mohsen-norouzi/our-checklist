import { Box, Typography } from '@mui/material';

import { useGetTeamsQuery } from 'redux/slices/api-slice';

import { TeamItem } from './TeamItem';

export const TeamList = () => {
  const { data, isLoading } = useGetTeamsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No Data</h1>;
  }

  return (
    <Box component='div' className='flex w-full h-full items-center justify-center'>
      {data.map((team) => (
        <TeamItem key={team.id} team={team} />
      ))}
    </Box>
  );
};
