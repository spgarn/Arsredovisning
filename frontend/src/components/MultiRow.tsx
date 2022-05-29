import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  subTitle?: string;
  isBold?: boolean;
  isSum?: boolean;
  isBig?: boolean;
  isNoBorder?: boolean;
  current?: React.ReactNode;
  previous?: React.ReactNode;
  children?: React.ReactNode;
};

const MultiRow = ({
  subTitle,
  isBold,
  isSum,
  isNoBorder,
  current,
  previous,
  isBig,
  children,
}: Props) => (
  <Grid mb={12} container columnGap={50}>
    <Grid pt={4} pl={!isSum && 12} xs={3} item alignSelf="center">
      {isBig ? (
        <Typography variant="h6" alignSelf="center" fontWeight={isBold && 900}>
          {subTitle}
        </Typography>
      ) : (
        subTitle && (
          <Typography alignSelf="center" fontWeight={isBold && 900}>
            {subTitle}
          </Typography>
        )
      )}
    </Grid>

    <Grid
      pt={8}
      alignSelf="center"
      item
      xs={3}
      borderTop={isSum && !isNoBorder && '1px solid gray'}
      container
    >
      {current || children}
    </Grid>
    {previous && (
      <Grid
        pt={8}
        item
        xs={3}
        borderTop={isSum && !isNoBorder && '1px solid gray'}
        container
      >
        {previous}
      </Grid>
    )}
  </Grid>
);

export default MultiRow;
