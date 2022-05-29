import { Grid, Paper, Typography } from '@mui/material';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export const NoteWrapper = ({ title, children }: IProps) => {
  return (
    <Paper
      elevation={5}
      style={{ padding: '24px', backgroundColor: '#f3f0f0', marginTop: '24px' }}
    >
      <>
        <Grid container spacing={75}>
          <Grid item>
            <Typography variant="h5" component="span">
              {title}
            </Typography>
          </Grid>
        </Grid>
        {children}
      </>
    </Paper>
  );
};
