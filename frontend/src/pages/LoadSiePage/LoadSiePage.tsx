import { Card, styled, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';
import DropArea from '../../components/DropArea';
import Page from '../../components/Page';
import StyledNavLink from '../../components/StyledNavLink';
import useStore from '../../hooks/useStore';

const StyledCard = styled(Card)`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
gap: 2rem;
margin-top: 2rem;
padding:6rem;
`;

const LoadSie = observer(() => {
  const { companyStore } = useStore();

  return (
    <Page>
      <DropArea />

      <StyledCard>
        {companyStore.isReady && (
          <>
            <Typography variant="h3">
              {companyStore.company.info.name}
            </Typography>
            <Typography variant="h4">
              {companyStore.company.info.registrationNumber}
            </Typography>
          </>
        )}
        <StyledNavLink disabled={!companyStore.isReady} to="/fiscal-year">
          <Button disabled={!companyStore.isReady} variant="contained">Fortsätt</Button>
        </StyledNavLink>
      </StyledCard>
    </Page>
  );
});

export default LoadSie;
