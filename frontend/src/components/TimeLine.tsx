import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { useLocation } from 'react-router-dom';
import StyledNavLink from './StyledNavLink';

const NavLink = styled(StyledNavLink)({
  padding: '20px',
  color: 'white',
});

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg,rgb(111, 18, 205) 0%,rgb(111, 80, 206) 50%,rgb(111, 153, 206) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg,rgb(111, 18, 205) 0%,rgb(111, 80, 206) 50%,rgb(111, 153, 206) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient( 136deg, rgb(111, 18, 205) 0%, rgb(111, 80, 206) 50%, rgb(111, 153, 206) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 136deg, rgb(111, 18, 205) 0%, rgb(111, 80, 206) 50%, rgb(111, 153, 206) 100%)',
  }),
}));

function ativeState(area: string) {
  if (area === '/company-info') return 1;
  if (area === '/result-sheet') return 2;
  if (area === '/balance-sheet') return 3;
  if (area === '/result-disposition') return 4;
  if (area === '/notes') return 5;
  if (area === '/year-story') return 6;
  if (area === '/sign') return 7;
  return 0;
}

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <NavLink to="/Arsredovisning">1</NavLink>,
    2: <NavLink to="/company-info">2</NavLink>,
    3: <NavLink to="/result-sheet">3</NavLink>,
    4: <NavLink to="/balance-sheet">4</NavLink>,
    5: <NavLink to="/result-disposition">5</NavLink>,
    6: <NavLink to="/notes">6</NavLink>,
    7: <NavLink to="/year-story">7</NavLink>,
    8: <NavLink to="/sign">8</NavLink>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  'Sie-fil',
  'Företagsuppgifter',
  'Resultaträkning',
  'Balansräkning',
  'Resultatdisposition',
  'Noter',
  'Förvaltningsberättelse',
  'Befattningshavare',
];

export default function CustomizedSteppers(): JSX.Element {
  const activeArea = useLocation();
  return (
    <Stack sx={{ width: '100%' }} mt={18} spacing={4}>
      <Stepper alternativeLabel activeStep={ativeState(activeArea.pathname)} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
