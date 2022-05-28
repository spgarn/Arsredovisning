import { Grid, Paper, Switch, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Note = ({ title, children }: IProps) => {
  const [activated, setActivated] = useState(false);
  const toggle = useCallback(() => {
    setActivated((prev) => !prev);
  }, []);

  return (
    <Paper elevation={5} style={{ padding: '24px', backgroundColor: '#f3f0f0', marginTop: '24px' }}>
      <>
        <Grid container spacing={75}>
          <Grid item>
            <Typography variant="h5" component="span">
              {title}
            </Typography>
          </Grid>

          <Grid item>
            <Switch onClick={toggle} />
          </Grid>
        </Grid>
        {activated && children}
      </>
    </Paper>
  );
};

export default Note;
