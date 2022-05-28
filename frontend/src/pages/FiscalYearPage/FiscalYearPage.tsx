import { Button, Card, Checkbox, styled, Typography } from '@mui/material';
import Page from '../../components/Page';
import StyledNavLink from '../../components/StyledNavLink';
import { formatDate } from '../../functions/formatting';
import useStore from '../../hooks/useStore';

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
`;

const FiscalYearPage = () => {
  const { companyStore } = useStore();

  return (
    <Page>
      <Typography variant="h4">Välj räkenskapsår</Typography>
      <StyledCard>
        <Typography variant="h6">
          {companyStore.isReady &&
            // eslint-disable-next-line max-len
            `För företaget ${companyStore.company.info.name}fanns följande räkenskapsår som kan användas i SIE-filen. Välj det år som ska lämnas in till Bolagsverket`}
        </Typography>
        <Typography variant="h5">
          <Checkbox />
          {companyStore.isReady &&
            `${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(
              companyStore.company.fiscalYears.currentEnd
            )}`}
        </Typography>
        <StyledNavLink to="/company-info">
          <Button variant="contained">Fortsätt</Button>
        </StyledNavLink>
      </StyledCard>
    </Page>
  );
};

export default FiscalYearPage;
