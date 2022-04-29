import { Card as MuiCard, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)<CardProps>(() => ({
  padding: '32px',
}));

export default Card;
