import {
  Button,
  Card, FormControl, MenuItem, Select, SelectChangeEvent, styled, Typography,
} from '@mui/material';
import { useState } from 'react';
import InputField from '../../components/InputField';
import Page from '../../components/Page';
import StyledNavLink from '../../components/StyledNavLink';
import useStore from '../../hooks/useStore';

const StyledCard = styled(Card)`
gap: 2rem;
margin-top: 2rem;
padding:1rem;
`;

const CompanyInfoPage = () => {
  const { companyStore } = useStore();
  const [amount, setAmount] = useState(0 || '');

  const handleChange = (event:SelectChangeEvent) => {
    setAmount(event.target.value);
  };
  return (
    <Page>
      <Typography variant="h4">Företagsuppgifter</Typography>
      <StyledCard>
        <Typography variant="h5">
          Räkenskapsår
        </Typography>
        <InputField title="Aktuellt räkenskapsår">
          <Typography variant="h6">
            {companyStore.isReady && `${companyStore.company.fiscalYears.currentStart} - ${companyStore.company.fiscalYears.currentEnd}`}
          </Typography>
        </InputField>
        <InputField title="Antal tidigare räkenskapsår">
          <Typography variant="h6">
            <FormControl sx={{ minWidth: '120px' }} size="small">

              <Select
                value={amount}
                onChange={handleChange}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </InputField>

        <StyledNavLink to="/company-info">
          <Button variant="contained">Fortsätt</Button>
        </StyledNavLink>
      </StyledCard>
    </Page>
  );
};

export default CompanyInfoPage;
