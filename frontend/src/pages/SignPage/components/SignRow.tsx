import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  first?:string
  second?: React.ReactNode
  third?: React.ReactNode
  fourth?:React.ReactNode
  fifth?: React.ReactNode
}

const SignRow:React.FC<Props> = ({
  first, second, third, fourth, fifth,

}) => (

  <Grid xs={12} mb={12} flexDirection="row" container gap={50}>
    <Typography alignSelf="center" variant="h6">{first}</Typography>
    {second}
    {third}
    {fourth}
    {fifth}

  </Grid>
);

export default SignRow;
