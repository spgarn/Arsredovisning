import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FieldAttributes } from 'formik';

type Props ={
  subTitle:string
  isBold?:boolean
  isSum?:boolean
  current?:FieldAttributes<any> | string
  previous?:FieldAttributes<any> | string
}

const SingleRow:React.FC<Props> = ({
  subTitle, isBold, isSum, current, previous, children,
}) => (
  <Grid mb={12} container columnGap={50}>
    <Grid pt={12} pl={!isSum && 12} xs={3} item alignSelf="center">
      <Typography alignSelf="center" fontWeight={isBold && 900}>{subTitle}</Typography>
    </Grid>

    <Grid pt={12} item xs={3} borderTop={isSum && '1px solid gray'} container>
      {current || children }
    </Grid>
    {previous && (
    <Grid pt={12} item xs={3} borderTop={isSum && '1px solid gray'} container>
      {previous}
    </Grid>
    )}

  </Grid>
);

export default SingleRow;
