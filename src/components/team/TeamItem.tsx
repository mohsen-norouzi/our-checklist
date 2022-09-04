import { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Team } from 'model';
import { Icon, IconButton } from '@mui/material';

import { useDeleteTeamMutation } from 'redux/slices/api-slice';

type Props = {
  team: Team;
  onSelect: (teamId: number) => void;
};

export const TeamItem: FC<Props> = (props) => {
  const [deleteTeam, deleteResult] = useDeleteTeamMutation();

  const handleSelect = () => {
    props.onSelect(props.team.id!);
  };

  const handleDelete = () => {
    deleteTeam(props.team.id!);
  };

  return (
    <Card
      sx={{ maxWidth: 250, height: 300 }}
      className='cursor-pointer transition-all hover:bg-neutral-100 relative'
    >
      <IconButton onClick={handleDelete} className='!absolute right-1 top-1 !text-ellipsis'>
        <Icon fontSize='small'>delete</Icon>
      </IconButton>

      {props.team.image ? (
        <CardMedia
          sx={{ height: 170 }}
          component='img'
          image={import.meta.env.VITE_ENDPOINT + props.team.image.url}
        />
      ) : (
        <CardMedia
          component='img'
          sx={{ height: 170 }}
          image='http://stefrosselli.com/img/wallpapers/screenshots/geometric_abstract_02.jpg'
        />
      )}

      <CardContent onClick={handleSelect}>
        <Typography gutterBottom variant='h5' component='div'>
          {props.team.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.team.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
