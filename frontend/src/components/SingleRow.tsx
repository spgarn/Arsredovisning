import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props ={
  subTitle:string
}

const SingleRow:React.FC<Props> = ({ subTitle, children }) => (
  <Grid mb={12} container justifyContent="space-between">
    <Grid ml={12} xs={3} item alignSelf="center">
      <Typography>{subTitle}</Typography>
    </Grid>
    <Grid item xs={3}>
      <Grid container>
        {children}
      </Grid>

    </Grid>
  </Grid>
);

export default SingleRow;
