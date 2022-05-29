// import { NavLink } from 'react-router-dom';
import { Grid, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import Card from '../../components/Card';
import MultiRow from '../../components/MultiRow';
import Page from '../../components/Page';
import SubTitle from '../../components/SubTitle';
import SignRow from './components/SignRow';

const SignPage = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  return (
    <Page>
      <Card>
        <SubTitle subTitle="Befattningshavare" />
        <Typography variant="h5">Styrelseledamöter och vd</Typography>
        <Typography>
          <p style={{ marginTop: 8, marginBottom: 1 }}>
            Observera att endast ordinarie styrelseledamöter ska anges
            tillsammans med en eventuell VD.
          </p>
          <p style={{ marginTop: 1, marginBottom: 1 }}>
            Suppleanter ska bara tas med om de ska ersätta en ordinarie ledamot
            vid underskrift av årsredovisning.
          </p>
          <p style={{ marginTop: 1, marginBottom: 1 }}>
            Om du vill ha en annan rollbeskrivning än någon av de förvalda går
            det att skriva en egen beskrivning direkt i fältet.
          </p>
        </Typography>
        <Grid xs={12} container flexDirection="row" mt={12} ml={105} gap={50}>
          <Typography width="172px">Förnman</Typography>
          <Typography width="172px">Efternamn</Typography>
          <Typography width="172px">Personnummer</Typography>
          <Typography width="172px">Roll</Typography>
        </Grid>
        <SignRow
          first="Företrädare 1"
          second={<TextField name="" />}
          third={<TextField name="" />}
          fourth={<TextField name="" />}
          fifth={<TextField name="" />}
        />

        <Typography variant="h5">
          Ort och datum för underskrift av årsredovisning
        </Typography>
        <Typography mb={12}>
          <p style={{ marginTop: 8, marginBottom: 1 }}>
            Här kan du fylla i när och var årsredovisningen skrivs under och då
            fylls det i automatiskt i årsredovisningen.
          </p>
        </Typography>
        <MultiRow
          isBold
          subTitle="Datum då årsredovisningen skrivs under"
          current={
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="For desktop"
                value={value}
                minDate={new Date()}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          }
        />
        <MultiRow
          isBold
          subTitle="Ort där årsredovisningen skrivs under"
          current={<TextField name="" />}
        />
      </Card>
    </Page>
  );
};

export default SignPage;
