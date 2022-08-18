import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
  // props: CircularProgressProps;
  color: string;
  stats: { total: number; done: number };
};

export const CircularStatic: React.FC<Props> = (props) => {
  const [progress, setProgress] = React.useState(10);

  const calculatePercent = () => {
    const { total, done } = props.stats;
    setProgress((100 * done) / total);
  };

  React.useEffect(() => {
    calculatePercent();
  }, [props.stats]);

  const CircularProgressWithLabel = (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant='determinate'
        value={progress}
        sx={{ color: progress === 100 ? props.color : 'gray' }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='caption' component='div' color='text.secondary'>
          {props.stats.done}/{props.stats.total}
        </Typography>
      </Box>
    </Box>
  );

  return CircularProgressWithLabel;
};
