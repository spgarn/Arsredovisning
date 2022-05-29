import { Box } from '@mui/material';
import Step from '@mui/material/Step';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';
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
      backgroundImage:
        'linear-gradient( 95deg,rgb(111, 18, 205) 0%,rgb(111, 80, 206) 50%,rgb(111, 153, 206) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(111, 18, 205) 0%,rgb(111, 80, 206) 50%,rgb(111, 153, 206) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(111, 18, 205) 0%, rgb(111, 80, 206) 50%, rgb(111, 153, 206) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(111, 18, 205) 0%, rgb(111, 80, 206) 50%, rgb(111, 153, 206) 100%)',
  }),
}));

const steps = [
  { title: 'Sie-fil', path: '/arsredovisning' },
  { title: 'Företagsuppgifter', path: '/company-info' },
  { title: 'Resultaträkning', path: '/result-sheet' },
  { title: 'Tillgångar', path: '/balance-sheet-assets' },
  { title: 'Balansräkning', path: '/balance-sheet-equity' },
  { title: 'Resultatdisposition', path: '/result-disposition' },
  { title: 'Noter', path: '/notes' },
  { title: 'Förvaltningsberättelse', path: '/year-story' },
  { title: 'Befattningshavare', path: '/sign' },
];

const ColorlibStepIcon = ({
  active,
  completed,
  className,
  icon,
}: StepIconProps) => (
  <ColorlibStepIconRoot
    ownerState={{ completed, active }}
    className={className}
  >
    <NavLink to={steps[Number(icon) - 1].path}>{icon}</NavLink>
  </ColorlibStepIconRoot>
);

export default function CustomizedSteppers() {
  const { pathname } = useLocation();

  const activeStep = useMemo(() => {
    const step = steps.map(({ path }) => path).indexOf(pathname);
    return step === -1 ? 0 : step;
  }, [pathname]);

  return (
    <Box width="100%" mt={18}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label.title}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {label.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
