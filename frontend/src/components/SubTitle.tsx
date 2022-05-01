import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  subTitle:string
}

const SubTitle:React.FC<Props> = ({ subTitle, children }) => (

  <Grid pb={12} container justifyContent="space-between" direction="row">
    <Grid item xs={3}>
      <Typography variant="h5">{subTitle}</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h6">{children}</Typography>
    </Grid>
  </Grid>
);

export default SubTitle;
