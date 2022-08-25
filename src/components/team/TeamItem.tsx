import { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Team } from 'model';

type Props = {
  team: Team;
  onSelect: (teamId: number) => void;
};

export const TeamItem: FC<Props> = (props) => {
  const handleSelect = () => {
    props.onSelect(props.team.id);
  };

  return (
    <Card
      sx={{ maxWidth: 250, height: 300 }}
      className='cursor-pointer transition-all hover:bg-neutral-100'
      onClick={handleSelect}
    >
      <CardMedia
        component='img'
        image={import.meta.env.VITE_ENDPOINT + props.team.image.url}
        className=''
      />

      <CardContent className=''>
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
