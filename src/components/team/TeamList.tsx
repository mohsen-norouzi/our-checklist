import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';

import { useGetTeamsQuery } from 'redux/slices/api-slice';
import { teamActions } from 'redux/slices/team-slice';

import { TeamItem } from './TeamItem';

export const TeamList = () => {
  const { data, isLoading } = useGetTeamsQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No Data</h1>;
  }

  const handleSelect = (teamId: number) => {
    dispatch(teamActions.setTeam(teamId));
    navigate('/');
  };

  return (
    <Box component='div' className='flex w-full h-full items-center justify-center gap-3'>
      {data.map((team) => (
        <TeamItem key={team.id} team={team} onSelect={handleSelect} />
      ))}
    </Box>
  );
};
