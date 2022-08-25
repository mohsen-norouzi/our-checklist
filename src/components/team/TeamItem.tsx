import { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Team } from 'model';

type Props = {
  team: Team;
};

export const TeamItem: FC<Props> = (props) => {
  console.log(props.team);
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component='img'
        height='140'
        image={import.meta.env.VITE_ENDPOINT + props.team.image.url}
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
