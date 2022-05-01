import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props ={
  subTitle:string
  isBold?:boolean
  isSum?:boolean
}

const SingleRow:React.FC<Props> = ({
  subTitle, isBold, isSum, children,
}) => (
  <Grid mb={12} container justifyContent="space-between">
    <Grid ml={!isSum && 12} xs={3} item alignSelf="center">
      <Typography fontWeight={isBold && 900}>{subTitle}</Typography>
    </Grid>
    <Grid item xs={3}>
      <Grid pt={12} borderTop={isSum && '1px solid gray'} container>
        {children}
      </Grid>

    </Grid>
  </Grid>
);

export default SingleRow;
