import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface IProps {
  subTitle: string;
  current?: string;
  previous?: string;
  children?: React.ReactNode;
}

const SubTitle = ({ subTitle, children, current, previous }: IProps) => (
  <Grid mb={12} container columnGap={50}>
    <Grid pt={12} xs={3} item alignSelf="center">
      <Typography variant="h4">{subTitle}</Typography>
    </Grid>
    <Grid pt={12} item xs={3} container>
      <Typography variant="h5">{current || children}</Typography>
    </Grid>
    {previous && (
      <Grid pt={12} item xs={3} container>
        <Typography variant="h5">{previous}</Typography>
      </Grid>
    )}
  </Grid>
);

export default SubTitle;
